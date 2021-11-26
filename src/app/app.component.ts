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
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "app-root",
	styleUrls: [ "./app.component.less" ],
	templateUrl: "./app.component.html"
})
export class AppComponent {
  public currentStatus:string="";
  public config: any;
  public collection = { count: 60, data: [] };
  public userLucky_List: any;
  public userLucky_Listspare:any;
  public empid:any;
  public luckyUser_detail:any;
  public department:any;
  public visibleState:boolean=true;
  public isLoading: boolean;
	public descriptionIndex: number;
	public descriptions: string[];
	public sprintName: string;
	public thingIndex: number;
	public things: string[];
	public data_server:any;
  public switchChange:boolean;
  public UserData:any;
  public slot_1: string[]=slot_1s;
  public slot_index_1=0;
  public slot_index_1_before:number=0;
  public draw:string="";

  public slot_2: string[]=slot_2s;
  public slot_index_2=0;
  public slot_index_2_before:number=0;

  public slot_3: string[]=slot_3s;
  public slot_index_3=0;
  public slot_index_3_before:number=0;

  public slot_4: string[]=slot_4s;
  public slot_index_4=0;
  public slot_index_4_before:number=0;

  public slot_5: string[]=slot_5s;
  public slot_index_5=0;
  public slot_index_5_before:number=0;
  public Displacement:number;
  public giftname:string="";
  public qty:number=0;
  public sequence:number=0;
  public gotItemIndex: number[]=[];
  public headElements = ['รหัสพนักงาน', 'ชื่อ','นามสกุล', 'แผนก', 'เวลา'];

	constructor(protected http: HttpClient) {
    this.Displacement=0;
    this.isLoading=false;
		this.descriptionIndex = 0;
		this.descriptions = descriptions;
		this.sprintName = "";
		this.thingIndex = 0;
		this.things = things;
    this.switchChange=false;
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
  this.getCurrentStatus();
  }

	public getCurrentStatus(){
    this.http.get(`http://192.0.0.46:8095/api/newyear/CurrentGift`, {}).subscribe((res:any) =>{
    const data:any = res;
    this.giftname=data[0].gift_name;
    this.qty=data[0].qty;
    this.sequence=data[0].sequence;
    // if(data[0].draw==0)
    //   this.draw="ยังไม่ได้จับรางวัล"
    // else
      this.draw=data[0].draw;
    console.log(data);
	  console.log("giftname : "+this.giftname+" qty : "+this.qty+" sequence : ",this.sequence);
   });
  }
  public getLuckyUser(){

    this.http.get(`http://192.0.0.46:8095/api/newyear/LuckyDraw`, {}).subscribe((res:any) =>{
      var data=res;
      console.log(data);
      this.userLucky_Listspare=[];
      this.UserData=""+data.luckydraw[0].name+" "+data.luckydraw[0].surname;
      this.department=data.luckydraw[0].dept;
      this.empid =data.luckydraw[0].empid;
      this.userLucky_Listspare = data.list;
      console.log("userluckylist: ",this.userLucky_List);
      console.log("UserData: "+this.UserData);
      console.log("department: "+this.department);
      console.log("empid: "+this.empid);
      this.slot_index_1_before=this.slot_index_1;
      this.slot_index_1=this.empid.substring(0,1);
      console.log("slot_index_1",this.slot_index_1);

      this.slot_index_2_before=this.slot_index_2;
      this.slot_index_2=this.empid.substring(1,2);
      console.log("slot_index_2",this.slot_index_2);

      this.slot_index_3_before=this.slot_index_3;
      this.slot_index_3=this.empid.substring(2,3);
      console.log("slot_index_3",this.slot_index_3);

      this.slot_index_4_before=this.slot_index_4;
      this.slot_index_4=this.empid.substring(3,4);
      console.log("slot_index_4",this.slot_index_4);

      this.slot_index_5_before=this.slot_index_5;
      this.slot_index_5=this.empid.substring(4,5);
      console.log("slot_index_5",this.slot_index_5);

      this.slot_index_1=Number (this.slot_index_1);
      this.slot_index_2=Number (this.slot_index_2);
      this.slot_index_3=Number (this.slot_index_3);
      this.slot_index_4=Number (this.slot_index_4);
      this.slot_index_5=Number (this.slot_index_5);

      this.slot_index_1=this.setIndexslot(this.slot_index_1_before,this.slot_index_1);
      this.slot_index_2=this.setIndexslot(this.slot_index_2_before,this.slot_index_2);
      this.slot_index_3=this.setIndexslot(this.slot_index_3_before,this.slot_index_3);
      this.slot_index_4=this.setIndexslot(this.slot_index_4_before,this.slot_index_4);
      this.slot_index_5=this.setIndexslot(this.slot_index_5_before,this.slot_index_5,true);
          console.log("slot1 Index: ["+this.slot_index_1+"]slot2 Index: ["+this.slot_index_2+"] Slot3 Index: ["+this.slot_index_3+"] slot4 Index: ["+this.slot_index_4+" ] slot5 Index: ["+this.slot_index_5+"]");
    });
  }
	public generateName() : void {
    setTimeout(() => {
      this.playAudio();
    }, 500)
    this.getLuckyUser();
    console.log("lucky",this.luckyUser_detail);
    // this.UserData=this.luckyUser_detail.
    this.visibleState=true;
    console.log("this.isLoading = true");
    this.isLoading = true;
    console.log(this.slot_1);
		this.shareSprintNameWithUser( this.sprintName ); //แสดง data ใน Log
    setTimeout(() => {
      // console.log("Waiting")
      this.isLoading=false;
      this.visibleState=false;
      this.playAudio_End();
      this.userLucky_List=[];
      this.userLucky_List=this.userLucky_Listspare;
      this.getCurrentStatus();
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
      return data+1991;
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
	private copyToClipboard( value: string ) : boolean {
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

export interface PeriodicElement {
  empid:number
  name: string;
  surname: number;
  dept: number;
  draw: string;
}
