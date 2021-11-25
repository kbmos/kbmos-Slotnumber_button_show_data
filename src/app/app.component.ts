// Import the core angular services.
import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// Import the application components and services.
import { descriptions } from "./dictionaries/descriptions";
import { things } from "./dictionaries/things";
import { ThrowStmt } from "@angular/compiler";
import { slot_1s } from "./dictionaries/slot_1s";
import { slot_2s } from "./dictionaries/slot_2s";
import { slot_3s } from "./dictionaries/slot_3s";
import { slot_4s } from "./dictionaries/slot_4s";
import { slot_5s } from "./dictionaries/slot_5s";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "app-root",
	styleUrls: [ "./app.component.less" ],
	templateUrl: "./app.component.html"
})
export class AppComponent {
  public luckyUser_detail:any;
  public department:string="";
  public visibleState:boolean=true;
  public isLoading: boolean;
	public descriptionIndex: number;
	public descriptions: string[];
	public sprintName: string;
	public thingIndex: number;
	public things: string[];
	public data_server:any;
  public switchChange:boolean;
  public UserData:string="";
  public slot_1: string[];
  public slot_index_1;
  public slot_index_1_before:number;

  public slot_2: string[];
  public slot_index_2;
  public slot_index_2_before:number;

  public slot_3: string[];
  public slot_index_3;
  public slot_index_3_before:number;

  public slot_4: string[];
  public slot_index_4;
  public slot_index_4_before:number;

  public slot_5: string[];
  public slot_index_5;
  public slot_index_5_before:number;

	test: string = "";
  public Displacement:number;
  public descriptionIndex_before:number;
  public gotItemIndex: number[]=[];

	constructor(protected http: HttpClient) {
    this.Displacement=0;
    this.isLoading=false;
		this.descriptionIndex = 0;
		this.descriptions = descriptions;
		this.sprintName = "";
		this.thingIndex = 0;
		this.things = things;
    this.switchChange=false;
    this.descriptionIndex_before=0;

    this.slot_1=slot_1s;
    this.slot_index_1=0;
    this.slot_index_1_before=0;
    this.slot_2=slot_2s;
    this.slot_index_2=0;
    this.slot_index_2_before=0;
    this.slot_3=slot_3s;
    this.slot_index_3=0;
    this.slot_index_3_before=0;
    this.slot_4=slot_4s;
    this.slot_index_4=0;
    this.slot_index_4_before=0;
    this.slot_5=slot_5s;
    this.slot_index_5=0;
    this.slot_index_5_before=0;

		// this.generateName();
    // var gotItemIndex =new Array();

	}


  ngOnInit() {
  this.slot_1.push("?");
  this.slot_2.push("?");
  this.slot_3.push("?");
  this.slot_4.push("?");
  this.slot_5.push("?");
  for(var z=0;z<2;z++){
    for(var y=0;y<100;y++){
      for(var x=0;x<10;x++){
        this.slot_1.push(""+x);
        this.slot_2.push(""+x);
        this.slot_3.push(""+x);
        this.slot_4.push(""+x);
        this.slot_5.push(""+x);
      }
    }
  }
  console.log(this.slot_1);
  this.http.get(`http://192.0.0.46:8095/api/employee/employeelist`, {}).subscribe((res:any) =>{
  const data:any = res;
	this.data_server = data;
	console.log("Success",this.data_server);
  this.descriptions.push("")
  this.things.push("");
    for(var y=0;y<2;y++){
        for(var x=0 ;x< data.length;x++)
        {

            this.descriptions.push(" "+data[x]['name']+" "+data[x]['surname']);
            if(data[x]['depT_CODE']=="00")
            {
              this.things.push ("สำนักงานใหญ่");
            }
            else if(data[x]['depT_CODE']=="01")
              this.things.push("บริหาร");
            else
              this.things.push(data[x]['depT_CODE']);
          }
       }
          // console.log("All data:",this.slot_1);


   });
  }

	// ---
	// PUBLIC METHODS.
	// ---

	// I generate the next Sprint Name by randomly selecting a Description and a Thing
	// and then joining the two values.\
  public getLuckyUser(){
    this.http.get(`http://192.0.0.46:8095/api/newyear/LuckyDraw`, {}).subscribe((res:any) =>{
      console.log("Data Lucky Uer : ",res);
    return res;
    });
  }
	public generateName() : void {
    setTimeout(() => {
      this.playAudio();
    }, 500)
    this.luckyUser_detail=this.getLuckyUser();
    this.visibleState=true;
    console.log("this.isLoading = true");
    this.isLoading = true;
    this.descriptionIndex_before=this.descriptionIndex; //เก็บค่าตัว current index ก่อนมันเปลี่ยนค่าไปค่าที่ random ได้
		this.descriptionIndex = this.nextIndex( this.descriptionIndex, this.descriptions ); //สุ่มหาตัวเลขที่แรนด้อมถัดไป
    this.thingIndex = 	this.descriptionIndex;
    console.log(descriptions);
    this.UserData=descriptions[this.descriptionIndex];
    this.department=things[this.thingIndex];

    this.slot_index_1_before=this.slot_index_1;
    this.slot_index_2_before=this.slot_index_2;
    this.slot_index_3_before=this.slot_index_3;
    this.slot_index_4_before=this.slot_index_4;
    this.slot_index_5_before=this.slot_index_5;
    this.slot_index_1 = this.checkrandom0(( Math.floor( Math.random() * 9 ) ));
    this.slot_index_2 = this.checkrandom0(( Math.floor( Math.random() * 9 ) ));
    this.slot_index_3 = this.checkrandom0(( Math.floor( Math.random() * 9 ) ));
    this.slot_index_4 = this.checkrandom0(( Math.floor( Math.random() * 9 ) ));
    this.slot_index_5 = this.checkrandom0(( Math.floor( Math.random() * 9 ) ));
    console.log("slot1: ["+this.slot_index_1+"]slot2: ["+this.slot_index_2+"] Slot3: ["+this.slot_index_3+"] slot4: ["+this.slot_index_4+" ] slot5: ["+this.slot_index_5+"]");
    this.slot_index_1=this.setIndexslot(this.slot_index_1_before,this.slot_index_1);
    this.slot_index_2=this.setIndexslot(this.slot_index_2_before,this.slot_index_2);
    this.slot_index_3=this.setIndexslot(this.slot_index_3_before,this.slot_index_3);
    this.slot_index_4=this.setIndexslot(this.slot_index_4_before,this.slot_index_4);
    this.slot_index_5=this.setIndexslot(this.slot_index_5_before,this.slot_index_5,true);
    console.log("slot1 Index: ["+this.slot_index_1+"]slot2 Index: ["+this.slot_index_2+"] Slot3 Index: ["+this.slot_index_3+"] slot4 Index: ["+this.slot_index_4+" ] slot5 Index: ["+this.slot_index_5+"]");

    // console.log(slot_1s);
    // console.log("descriptionIndex After return func:",this.descriptionIndex);
    // this.descriptionIndex=1;
    // this.Displacement= this.descriptionIndex-this.descriptionIndex_before; //หาค่ากระจัดระหว่างระยะห่างอันแรก กับ อันที่แรนด้อมได้ใหม่่
    // this.Displacement=Math.abs(this.Displacement);

    // // console.log("Displacement= "+this.Displacement+" descriptionIndex :"+(this.descriptionIndex)+" descriptionIndex_before: "+this.descriptionIndex_before+" Now this.switchChange = "+this.switchChange);

    // if( this.Displacement< 500 && this.switchChange==false){
    //   // console.log("descriptionIndex < 200 then change to :",this.descriptionIndex+this.data_server.length+ "switchChange= true ");
    //   this.descriptionIndex+=this.data_server.length;
    //   // this.switchChange=true;
    //   // this.descriptionIndex+= this.descriptions.length;
    //   // console.log("");
    // }
    // else if( this.Displacement< 500 && this.switchChange==true){
    //   // console.log("descriptionIndex < 200 then change to :",this.descriptionIndex-this.data_server.length+"switchChange= false ");
    //   this.descriptionIndex=this.descriptionIndex-this.data_server.length;
    //   // console.log("descriptionIndex LastChange : ",this.descriptionIndex);
    //   // this.switchChange=false;
    //   // this.descriptionIndex+= this.descriptions.length;
    //   // console.log("");
    // }
    // this.thingIndex = 	this.descriptionIndex;


    // console.log("Description length : "+this.descriptions.length," things length :"+this.things.length);

    // if(this.gotItemIndex.find(e => e === this.descriptionIndex)){
		// console.log("1");
    //   this.descriptionIndex++;
    //   this.thingIndex++;
    // }

    if(this.descriptionIndex>this.data_server.length)
      this.gotItemIndex.push(this.descriptionIndex-this.data_server.length-1);
    else
      this.gotItemIndex.push(this.descriptionIndex-1);

    console.log(this.gotItemIndex);
		this.sprintName = (
			this.descriptions[ this.descriptionIndex ] +
			" " +
			this.things[ this.thingIndex ]

		);
		this.shareSprintNameWithUser( this.sprintName ); //แสดง data ใน Log
    setTimeout(() => {
      // console.log("Waiting")
      this.isLoading=false;
      this.visibleState=false;
      this.playAudio_End();
    }, 12400)
    console.log("this.isLoading = false");


	}
  checkrandom0(num:number){
    // if(num==0)
    //   return 1;
    // else
      return num;
  }
  public playAudio(){
    let audio = new Audio();
    audio.src = "../assets/sounds/slot-machine-sound-effect (2).mp3";
    audio.load();
    audio.play();
  }
  public playAudio_End(){
    let audio = new Audio();
    audio.src = "../assets/sounds/mixkit-coin-win.wav";
    audio.load();
    audio.play();
  }

  public setIndexslot(currentIndex:number,data : number ,last:boolean=false){

    if(currentIndex===0){ //ครั้งแรก ดีดไปสูง
      console.log("ครั้งแรก ดีดไปสูง");
      return 1991+data;
    }
    else if(this.switchChange==false){ //เลขสูง ดีดไปต่ำ
      console.log("เลขสูง ดีดไปต่ำ");
      if(last==true)
       this.switchChange=true;
      return data+1;
    }
    else { //เลขต่ำ ดีดไปสูง
      console.log("เลขต่ำ ดีดไปสูง");
      if(last==true)
        this.switchChange=false;
      return data+1991
    }
    // return currentIndex;
  }
	// public generate2() : void {
	// 	for(var x=0 ;x< this.data_loop.length;x++) {
	// 		this.test = this.data_loop[x].name;
	// 		this.delay(300);
	// 		console.log(this.test);
	// 	}
	// }

	// ---
	// PRIVATE METHODS.
	// ---

	// I try to copy the value to the user's clipboard. Returns Boolean indicating
	// whether or not the operation appeared to be successful.
	private copyToClipboard( value: string ) : boolean {

		// In order to execute the "Copy" command, we actually have to have a "selection"
		// in the rendered document. As such, we're going to inject a Textarea element,
		// populate it with the given value, select it, and then copy it. Since this
		// operation is going to change the document selection, let's get a reference to
		// the currently-active element (expected to be our "Generate" button) such that
		// we can return focus after the copy command has executed.
		var activeElement = <HTMLElement | null>document.activeElement;

		var textarea: HTMLTextAreaElement = document.createElement( "textarea" );
		textarea.style.opacity = "0";
		textarea.style.position = "fixed";
		//console.log("VALUE : ",value);
		textarea.value = value;
		// Set and select the value (creating an active Selection range).
		document.body.appendChild( textarea );
		textarea.select();

		try {

			// CAUTION: Even though this may not throw an error, the COPY command does
			// not appear to work unless it is in response to a direct user interaction.
			// Meaning, nothing gets copied until the user actually CLICKS the button to
			// generate a new name. Not sure why that is? Maybe a security issue?
			document.execCommand( "copy" );
			return( true );

		} catch ( error ) {

			return( false );

		} finally {

			// Return focus to the active element, if we had one.
			if ( activeElement ) {

				activeElement.focus();

			}

			document.body.removeChild( textarea );

		}

	}


	// I return a random index for selection within the given collection.
	private nextIndex( currentIndex: number, collection: any[] ) : number {
		// console.log("Current Index",currentIndex)
		var nextIndex = currentIndex;
		var length = this.data_server.length;
    // // var length = collection.length;
    // console.log(length);

		// Keep generating a random index until we get a non-matching value. This just
		// ensures some "change" from generation to generation.
		while ( nextIndex === currentIndex ) { //หมุนไปหาค่าที่กำหนด
			// console.log("Loop.........................");
			nextIndex = ( Math.floor( Math.random() * length ) );
      // console.log("User Index win : ",nextIndex);
      if(nextIndex==0){
        nextIndex=1;
      }
      else if(this.switchChange==true){
        nextIndex+=(this.data_server.length);
        // console.log("Real Current Index: "+nextIndex);
      }


		}

		return( nextIndex );

	}


	// I share the given Sprint Name with the user.
	private shareSprintNameWithUser( sprintName: string ) : void {

		// As a convenience, try to copy the new name to the user's clipboard.
		var nameWasCopied = this.copyToClipboard( sprintName );

		// Also, let's log the name to the user's console.
		console.group(
			"%c Sprint Name Generator ",
			"background-color: #121212 ; color: #ffffff ;"
		);
		console.log(
			`%c${ sprintName }`,
			"color: #ff3366 ;"
		);
		if ( nameWasCopied ) {

			console.log(
				"%cThis name was copied to your clipboard.",
				"font-style: italic ;"
			);

		}
		console.groupEnd();

	}

}
