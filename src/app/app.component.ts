// Import the core angular services.
import { Component } from "@angular/core";
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
// Import the application components and services.
import { descriptions } from "./dictionaries/descriptions";
import { things } from "./dictionaries/things";
import { slot_1s } from "./dictionaries/slot_1s";
import { slot_2s } from "./dictionaries/slot_2s";
import { slot_3s } from "./dictionaries/slot_3s";
import { slot_4s } from "./dictionaries/slot_4s";
import { slot_5s } from "./dictionaries/slot_5s";
import  *  as  data from '../assets/json_files/test_flex.json'

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "app-root",
	styleUrls: [ "./app.component.less" ],
	templateUrl: "./app.component.html"
})
export class AppComponent {
  public firstname_localstorage:any=[];
  public lastname_localstorage:any=[];
  public empid_localstorage:any=[];
  public department_localstorage:any=[];

  public giftname_message:any="";
  public giftseq_message:any="";
  public giftqty_message:any="";
  public firstname_message:any="";
  public lastname_message:any="";
  public empid_message:any="";
  public department_message:any="";
  public draw_message:any=0;

  public showalldialog=false;
  public white:string="white"
  public transition:number=0;
  public lastItem: boolean=false;
  dropDownIsOpen: boolean = false;
  modalIsOpen: boolean = false;
  modalIsOpen2: boolean = false;
  public alluserluckylist:any=[];
  public no=1;
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
  public isLoading2: boolean=false;
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
  public hidedeletelasteddraw:boolean=false;
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
  public headElements = ['ลำดับที่','รหัสพนักงาน', 'ชื่อ','นามสกุล', 'แผนก', 'เวลา'];
  public headElements2 = ['ลำดับที่','รหัสพนักงาน', 'ชื่อ','นามสกุล', 'แผนก', 'เวลา','รางวัล'];
  public   setZero:any ="";
  public allgifts:number=0;
  audiosound1:any;
  audiosound2:any;
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
  elements: any = [];
  courseList = [

  {
    "messages":[
        {
            "type":"flex",
            "altText":"Flex Message",
            "contents":{
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://d33wubrfki0l68.cloudfront.net/874dde41bca3a1105fe54a7563a2ade5acf0da12/85e83/_nuxt/img/gift360x360.135e5fe.gif",
    "animated":true,
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover",
    "position": "relative"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "ขอแสดงความยินดี",
        "weight": "bold",
        "size": "xl",
        "wrap": true,
        "align": "center"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "separator"
          },
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "text",
                "text": "ผู้โชคดี",
                "flex": 2,
                "size": "md",
                "color": "#aaaaaa"
              },
              {
                "type": "text",
                "text": "คุณทดสอบ ทดสอบ",
                "size": "md",
                "flex": 5
              }
            ],
            "spacing": "sm",
            "margin": "md"
          },
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "text",
                "text": "รหัส",
                "flex": 2,
                "color": "#aaaaaa",
                "size": "md"
              },
              {
                "type": "text",
                "text": "00000",
                "flex": 5,
                "size": "md"
              }
            ],
            "spacing": "sm"
          },
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "text",
                "text": "แผนก",
                "flex": 2,
                "size": "md",
                "color": "#aaaaaa"
              },
              {
                "type": "text",
                "text": "test",
                "flex": 5,
                "size": "md"
              }
            ],
            "spacing": "sm"
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "รางวัล",
                "size": "md",
                "flex": 2,
                "color": "#aaaaaa"
              },
              {
                "type": "text",
                "text": "ตู้เย็น จำนวน 3 รางวัล",
                "wrap": true,
                "size": "md",
                "flex": 5
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "ครั้งที่",
                "color": "#aaaaaa",
                "size": "md",
                "flex": 2
              },
              {
                "type": "text",
                "text": "1",
                "wrap": true,
                "color": "#666666",
                "size": "md",
                "flex": 5
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "text",
        "text": "กรุณาแสดงตันยืนยันการรับรางวัลกับเจ้าหน้าที่ หากไม่ทำการยืนยันจะถือเป็นการสละสิทธิ์",
        "wrap": true
      },
      {
        "type": "spacer",
        "size": "sm"
      }
    ],
    "flex": 0
  }
  }
        }
    ]
  }


  ];
  ngOnInit() {
  // this.userLucky_List=[];
  console.log("Get Json data", this.courseList);
  localStorage.setItem('firstname_localstorage', this.firstname_localstorage);
  localStorage.setItem('lastname_localstorage', this.lastname_localstorage);
  localStorage.setItem('empid_localstorage', this.empid_localstorage);
  localStorage.setItem('department_localstorage', this.department_localstorage);

  console.log("UserLucky_list ",this.userLucky_List);
  this.refreshcurrentgift();
  this.getAllUserList();
  this.getCurrentStatus();

  this.slot_1.push("0");
  this.slot_2.push("0");
  this.slot_3.push("0");
  this.slot_4.push("0");
  this.slot_5.push("0");
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

  }

  public refreshcurrentgift(){
    this.http.get(`http://192.0.0.46:8095/api/newyear/LuckyPersons`).subscribe({
      next: res => {
        var data:any=res;


        if(data.msg!="ไม่พบรางวัลใดๆในระบ"){
          console.log("data.msg แสดงข้อมูลตอบกลับ : ",data.msg);
          this.userLucky_List=data;
          console.log("UserLucky_List :success",data);
        }
        else{
          console.log('There was an error!');
        }

      }
    });

  }
  public resettostart(){
    this.setZero = "setZero";
    this.userLucky_List=[];
    this.slot_index_1_before=0;
    this.slot_index_2_before=0;
    this.slot_index_3_before=0;
    this.slot_index_4_before=0;
    this.slot_index_5_before=0;

    this.slot_index_1=this.resetIndexslot();
    this.slot_index_2=this.resetIndexslot();
    this.slot_index_3=this.resetIndexslot();
    this.slot_index_4=this.resetIndexslot();
    this.slot_index_5=this.resetIndexslot();
    this.switchChange=false;
  }
  public NextReward(){
    this.playAudio_click();
    this.setZero = "setZero";
    this.lastItem=false;
    this.getCurrentStatus();
    this.resettostart();
    this.visibleState=true;
    this.switchChange=false;

  }
  public getAllUserList(){
    this.alluserluckylist=[];
    this.http.get(`http://192.0.0.46:8095/api/newyear/NewYearGiftList`, {}).subscribe((res:any) =>{
      const data:any = res;
      this.allgifts=data.length;
      console.log("allgifts",this.allgifts);

      console.log("all gift : ",this.allgifts);
      for(var i=0;i<data.length;i++){

        if(data[i].draw_time!=null){
          data[i].draw_time=data[i].draw_time.substring(11,19);
        }
      }
      this.alluserluckylist=data;
      console.log("all Data",data);
     });

  }

	public getCurrentStatus(){ //เอาค่า gift_name qty sequence draw
    this.http.get(`http://192.0.0.46:8095/api/newyear/CurrentGift`, {}).subscribe((res:any) =>{
    const data:any = res;
    console.log("DataCurrnt Gift API : ",data);
    console.log("isFirstPerson : ",data.isFirstPerson);
    if(data.isFirstPerson==true){
      this.hidedeletelasteddraw=true;
      console.log(" hidedeletelasteddraw :",this.hidedeletelasteddraw);
    }
    else{
      this.hidedeletelasteddraw=false;
    }
    if(data.currentGift.length!=0){
      this.giftname=data.currentGift[0].gift_name;
      this.giftname_message=data.currentGift[0].gift_name;

      this.qty=data.currentGift[0].qty;
      this.giftqty_message=data.currentGift[0].qty;
      console.log("giftqty_message :",this.giftqty_message)
      this.sequence=data.currentGift[0].sequence;
      this.giftseq_message=data.currentGift[0].sequence;

      this.draw=data.currentGift[0].draw;
      this.draw_message=data.currentGift[0].draw;

      console.log("giftname : "+this.giftname_message+" qty : "+this.qty+" giftseq_message : ",this.giftseq_message+" draw : ",this.draw_message);
	    console.log("giftname : "+this.giftname+" qty : "+this.qty+" sequence : ",this.sequence+" LastItem : ",this.lastItem);
    }
    else {
      // รางวัลหมดแล้ว
      this.showalldialog=true;
      this.giftname="ไม่มี";
      this.qty=0;
      this.sequence=0;
      this.draw="0";
      this.isLoading=true;

    }
   });
  }
  focusFunction(){
    this.audiosound1 = new Audio();
    this.audiosound1.src = "../assets/sounds/jingle_bells_instrumental_-1692404172081212068.mp3";
    this.audiosound1.load();
    this.audiosound1.play();
  }
  focusOutFunction(){
    this.audiosound1.pause();
  }
  focusFunction2(){
    this.audiosound2 = new Audio();
    this.audiosound2.src = "../assets/sounds/20211203_-8962131256592367127.mp3";
    this.audiosound2.load();
    this.audiosound2.play();
  }
  focusOutFunction2(){
    this.audiosound2.pause();
  }
  showModalDialog(){

    this.playAudio_click();
    this.modalIsOpen = true;
  }
  showModalDialog2(){
    this.playAudio_click();
    this.modalIsOpen2 = true;
  }


  public getLuckyUser(){ //จับรางวัล
      this.playAudio_click();
      this.http.get(`http://192.0.0.46:8095/api/newyear/LuckyDraw`).subscribe({
      next: (res: any)=> {
      var data:any=res;
      console.log("Lucky draw Data: ");
      if(data.msg!="ไม่พบพนักงานพนักงานลงทะเบียนร่วมกิจกรรม"){
        console.log(data);
        this.userLucky_Listspare=[];
        this.UserData=""+data.luckydraw[0].name+" "+data.luckydraw[0].surname;
        // var num=Number (this.draw);
        if(data.luckydraw[0].dept=="00"){
          this.department="สำนักงานใหญ่";
        }
        else if(data.luckydraw[0].dept=="01"){
          this.department="บริหาร";
        }
        else{
          this.department=data.luckydraw[0].dept;
        }

        this.firstname_message=data.luckydraw[0].name;
        this.lastname_message=data.luckydraw[0].surname;
        this.empid_message=data.luckydraw[0].empid;
        this.department_message=this.department;

        var firstname_localstorage_spare:any=[];
        var lastname_localstorage:any=[];
        var empid_localstorage:any=[];
        var department_localstorage:any=[];

        // firstname_localstorage_spare=localStorage.getItem('firstname_localstorage');
        // lastname_localstorage=localStorage.getItem('lastname_localstorage');
        // empid_localstorage=localStorage.getItem('empid_localstorage');
        // department_localstorage=localStorage.getItem('department_localstorage');
        // department_localstorage.
        // this.firstname_localstorage=firstname_localstorage_spare;
        // this.lastname_localstorage=lastname_localstorage;
        // this.empid_localstorage=empid_localstorage;
        // this.department_localstorage=department_localstorage;

        // this.firstname_localstorage.push(this.firstname_message);
        // this.lastname_localstorage.push(this.lastname_message);
        // this.empid_localstorage.push(this.empid_message);
        // this.department_localstorage.push(this.department_message);

        // console.log("firstname_localstorage: ",this.firstname_localstorage);
        // console.log("lastname_localstorage: ",this.lastname_localstorage);
        // console.log("empid_localstorage: ",this.empid_localstorage);
        // console.log("department_localstorage: ",this.department_localstorage);

        // localStorage.setItem('firstname_localstorage', this.firstname_localstorage);
        // localStorage.setItem('lastname_localstorage', this.lastname_localstorage);
        // localStorage.setItem('empid_localstorage', this.empid_localstorage);
        // localStorage.setItem('department_localstorage', this.department_localstorage);


        this.empid =data.luckydraw[0].empid;

        for(var i=0;i<data.list.length;i++){

          if(data.list[i].draw!=null){


            data.list[i].draw=data.list[i].draw.substring(11,19);
          }
        }
        this.userLucky_Listspare = data.list;
        this.lastItem=data.isLastItem;

        console.log("userluckylistSpare: ",this.userLucky_Listspare);
        console.log("UserData: "+this.UserData);
        console.log("department: "+this.department);
        console.log("empid: "+this.empid);
        console.log("All data Query",data);

        this.slot_index_1_before=this.slot_index_1;
        this.slot_index_1=this.empid.substring(0,1);

        this.slot_index_2_before=this.slot_index_2;
        this.slot_index_2=this.empid.substring(1,2);

        this.slot_index_3_before=this.slot_index_3;
        this.slot_index_3=this.empid.substring(2,3);

        this.slot_index_4_before=this.slot_index_4;
        this.slot_index_4=this.empid.substring(3,4);

        this.slot_index_5_before=this.slot_index_5;
        this.slot_index_5=this.empid.substring(4,5);

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

      }
      else{
        this.isLoading=true;
        this.NextReward();
        window.alert("ไม่พบพนักงานพนักงานลงทะเบียนร่วมกิจกรรมแล้ว");
      }
      },
      error: (error: any) => {
          console.log("error : ",error);
      }
  });

  }
  DeleteLastRecord(){
    if (window.confirm("ต้องการที่จะรีเซ็ตการสุ่มก่อนหน้าไหม?")) {
      this.http.put('http://192.0.0.46:8095/api/newyear/CancelLastestDraw',null).subscribe((res:any) =>{
      const data:any = res.cancel[0];
      console.log("DeleteLastRecord: ",data);
      this.refreshcurrentgift();
      this.getCurrentStatus();

      this.getAllUserList();
      this.resettostart();
      this.lastItem=false;
      this.visibleState=true;
      this.isLoading=false;
      this.showalldialog=false;
      this.giftname_message=data.gift;
      var draw=data.no;
      this.empid_message=data.empid;
      this.firstname_message=data.name;
      this.lastname_message=data.surname;
      this.department_message=data.dept;
      this.http.get(`http://192.0.0.46:8095/api/newyear/CurrentGift`, {}).subscribe((res:any) =>{
        const data:any = res;
        console.log("DeleteLastRecord_find_qty",data.currentGift[0].qty);
        this.giftqty_message=data.currentGift[0].qty;
        console.log("giftqty_message_Delete_Record: ",this.giftqty_message);
        this.http.post(``,null).subscribe({
          next: res => {
            console.log("2");
            var data:any=res;
            console.log(data);
          }
          });
        // this.http.post(`http://192.0.0.46:8095/api/newyear/LineMessage?message=%0aคุณ ${this.firstname_message} ${this.lastname_message} รหัสผนักงาน: ${this.empid_message } แผนก: ${this.department_message} ท่านไม่ได้มายืนยันตามกำหนด PVOFamily จะทำการจับรางวัล " ${this.giftname_message}" จำนวน "${this.giftqty_message}" รางวัล ครั้งที่ ${draw} ใหม่!  `,null).subscribe({
        //   next: res => {
        //     console.log("2");
        //     var data:any=res;
        //     console.log(data);
        //   }
        //   });
        var giftname_message=this.giftname_message+" จำนวน "+this.giftqty_message + " รางวัล"
        this.http.post(`http://192.0.0.46:8095/api/newyear/LineFlexMessage?name=${this.firstname_message}&surname=${this.lastname_message}&empid=${this.empid_message }&dept=${this.department_message }&gift=${giftname_message}&no=${draw}&isCancel=true`,null).subscribe({
          next: res => {
            console.log("2");
            var data:any=res;
            console.log("server:",data);
          },
          error: res =>{
            console.log("error ",res);

          }
          });

      });

    });

    }


  }
	public generateName() : void {
    this.setZero="";
    setTimeout(() => {
      this.playAudio();
    }, 500)

    this.getLuckyUser();
    // this.UserData=this.luckyUser_detail.
    this.visibleState=true;
    this.isLoading = true;
    this.isLoading2 = true;
		this.shareSprintNameWithUser( this.sprintName ); //แสดง data ใน Log
    setTimeout(() => {

      this.playAudio_End();
    }, 4100)
    setTimeout(() => {

      this.playAudio_End();
    }, 6200)
    setTimeout(() => {

      this.playAudio_End();
    }, 8300)
    setTimeout(() => {

      this.playAudio_End();
    }, 10400)
    setTimeout(() => {

      this.isLoading=false;
      this.isLoading2=false;
      this.visibleState=false;
      this.playAudioVictory();
      this.userLucky_List=[];
      this.userLucky_List=this.userLucky_Listspare;
        console.log("this.lastItem!=true");
        this.getCurrentStatus();
        var num=Number (this.draw);
        num++;
        this.draw=""+num;

      this.getAllUserList();
      // this.http.post(`http://192.0.0.46:8095/api/newyear/LineMessage?message=${this.draw} ${this.department} %0a ส่งข้อความผู้โชคดี`,null).subscribe({
    //     this.http.post(`http://192.0.0.46:8095/api/newyear/LineMessage?message=%0aPVOFamily ขอแสดงความยินดีกับท่านที่ได้รับรางวัล และโปรดกรุณามายืนยันการรับรางวัล%0aรางวัล "${this.giftname_message}" จำนวน "${this.giftqty_message}" รางวัล %0aจับรางวัลครั้งที่ ${this.draw}  %0aผู้โชคดีคือ: ${this.firstname_message} ${this.lastname_message} %0aรหัสผนักงาน: ${this.empid_message }%0aแผนก: ${this.department_message }`,null).subscribe({
    //   next: res => {
    //     var data:any=res;
    //     console.log(data);
    //   }
    // });
    var giftname_message=this.giftname_message+" จำนวน "+this.giftqty_message + " รางวัล"
    this.http.post(`http://192.0.0.46:8095/api/newyear/LineFlexMessage?name=${this.firstname_message}&surname=${this.lastname_message}&empid=${this.empid_message }&dept=${this.department_message }&gift= ${giftname_message}&no=${this.draw}&isCancel=false`,null).subscribe({
          next: res => {
            console.log("2");
            var data:any=res;
            console.log("server:",data);
          },
          error: res =>{
            console.log("error ",res);

          }
          });
    }, 12400)

	}

  public playAudio(){
    let audio = new Audio();
    audio.src = "../assets/sounds/slotsound12s2.wav";
    audio.load();
    audio.play();
  }
  public playAudio_End(){
    let audio = new Audio();
    audio.src = "../assets/sounds/mixkit-coin-win.wav";
    audio.load();
    audio.play();
  }
  public playAudio_click(){
    let audio = new Audio();
    audio.src = "../assets/sounds/Mouse-Click-00-c-FesliyanStudios.com2.mp3";
    audio.load();
    audio.play();
  }
  public playAudioVictory(){
    let audio = new Audio();
    audio.src = "../assets/sounds/sfx-victory6.mp3";
    audio.load();
    audio.play();
  }
  public resetIndexslot(){
    return 0;
  }
  public setIndexslot(currentIndex:number,data : number ,last:boolean=false){

    if(currentIndex===0){ //ครั้งแรก ดีดไปสูง
      console.log("//ครั้งแรก ดีดไปสูง");
      return data+1991;
    }
    else if(this.switchChange==false){ //เลขสูง ดีดไปต่ำ
      console.log("//เลขสูง ดีดไปต่ำ");
      if(last==true)
       this.switchChange=true;
      return data+1;
    }
    else { //เลขต่ำ ดีดไปสูง
      console.log("//เลขต่ำ ดีดไปสูง");
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

		var nextIndex = currentIndex;
		var length = this.data_server.length;



		while ( nextIndex === currentIndex ) { //หมุนไปหาค่าที่กำหนด

			nextIndex = ( Math.floor( Math.random() * length ) );

      if(nextIndex==0){
        nextIndex=1;
      }
      else if(this.switchChange==true){
        nextIndex+=(this.data_server.length);
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
  no:number;
  empid:number
  name: string;
  surname: number;
  dept: number;
  draw: string;
}
