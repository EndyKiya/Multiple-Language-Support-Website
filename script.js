// HAMBERER MENU TOGGLE
var Ele = document.getElementById("nav_container_mobile");
var ul_list = document.querySelector(".nav-container-mobile nav ul");
const toggle_overlay = (arg) =>{    
    if(arg == 1){
        ul_list.style.display = "flex";
    }else{
        ul_list.style.display = "none";
    }
}
// var language = new Array();
language["eng"] = new Array("Home", "About us", "Gallery", "Contact us", "Sign up", "Sign in",//0-5
        "A Place Where Every One Want To Be There", "Come and Enjoy ⫸⫸⫸", //6-7
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsum repellendus est ullam sunt accusamus iste rem rerum omnis assumenda! Eveniet labore eligendi accusantium sint, beatae dignissimos sequi quisquam dolorum?",//8
         "Gallery", "Description 1", "Description 2", "Description 3",//9-12
         "Be Our Subscriber", "Name", "E-mail", "Send", "Location");//13-17
language["oro"] = new Array("Ka'umsa", "Waa'ee", "Do'ii", "Nu Qunnami", "Galmee", "Seeni",//0-5
       "Bakka Namni Hunduu Itti Hargamu Fedhuu", "kootatti Bohaara ⫸⫸⫸", //6-7
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsum repellendus est ullam sunt accusamus iste rem rerum omnis assumenda! Eveniet labore eligendi accusantium sint, beatae dignissimos sequi quisquam dolorum?",//8
        "Bakka Do'ii", "Ibsa 1", "Ibsa 2", "Ibsa 3",//9-12
        "Maamilaa Keenya ta'aa", "Maqaa", "Emeela", "Ergii", "Teessoo");//13-17
language["amh"] = new Array("ዋና ገጽ", "ስለ እኛ", "ማሳያ", "ያግኙን", "መዝግብ", "ግባ",//0-5
       "ሰው ሁሉ ሊገኝበት የሚፈልገው ቦታ", "ይምጡና ይዝናኑ ⫸⫸⫸", //6-7
       "ሎርም ኢፕሰም ዶሎር ፣ ሲት አመት ኮንሰክተቸር አዲፒሲስ ኤሊት እምፔዲት ሎርም ኢፕሰም ዶሎር ፣ ሲት አመት ኮንሰክተቸር አዲፒሲስ ኤሊት እምፔዲት ሎርም ኢፕሰም ዶሎር ፣ ሲት አመት ኮንሰክተቸር አዲፒሲስ ኤሊት እምፔዲት ሎርም ኢፕሰም ዶሎር ፣ ሲት አመት ኮንሰክተቸር አዲፒሲስ ኤሊት እምፔዲት ሎርም ኢፕሰም ዶሎር ፣ ሲት አመት?",//8
       "ማሳያ", "መግለጫ 1", "መግለጫ 2", "መግለጫ 3",//9-12
       "ደንበኛ ይሁኑ", "ስም", "ኢሜል", "ላክ", "አድራሻ");//13-17

function setLanguage(languageChoice){
       var lang = languageChoice;
       localStorage.setItem("language_preference", lang);
       getLanguage();
}
function getLanguage(){
       var last_lang = localStorage.getItem('language_preference');
       if(last_lang == null){
           localStorage.setItem("language_preference", "eng");
       }
       else{
           changeLanguage(last_lang);
       }       
}
function changeLanguage(lang_){
// ============== localStorage ================
  var link = document.links; // accessing all <a></a> elements
  var moto = document.getElementById("moto");
  var call = document.querySelector(".call");
  var about_text = document.getElementById("about_text");
  var gallery_txt = document.querySelector(".gallery-container h2");
  var gallery_description = document.querySelectorAll(".gallery div p");// array 
  var be_our = document.querySelector(".footer-top-left h2");
  var form_labels = document.querySelectorAll("form label p");// array
  var form_inputs = document.querySelectorAll("form input");// array
  var footer_txt = document.querySelector(".footer-top-right p");
  var contact_info = document.querySelectorAll(".footer-top-right h4 span");// array email/location
       if(lang_ === "oro"){
        link[0].innerText = language["oro"][0];
        link[1].innerText = language["oro"][1];
        link[2].innerText = language["oro"][2];
        link[3].innerText = language["oro"][3];
        link[4].innerText = language["oro"][4];
        link[5].innerText = language["oro"][5];
        link[6].innerText = language["oro"][0];
        link[7].innerText = language["oro"][1];
        link[8].innerText = language["oro"][2];
        link[9].innerText = language["oro"][3];
        link[10].innerText = language["oro"][4];
        link[11].innerText = language["oro"][0];
        link[12].innerText = language["oro"][1];
        link[13].innerText = language["oro"][2];
        link[14].innerText = language["oro"][3];
        link[15].innerText = language["oro"][4];
        link[16].innerText = language["oro"][5];

        moto.innerText= language["oro"][6];
        call.innerText = language["oro"][7];
        about_text.innerText= language["oro"][8];
        gallery_txt.innerText= language["oro"][9];
        gallery_description[0].innerText= language["oro"][10];
        gallery_description[1].innerText= language["oro"][11];
        gallery_description[2].innerText= language["oro"][12];
        be_our.innerText = language["oro"][13];
        form_labels[0].innerText = language["oro"][14];
        form_labels[1].innerText = language["oro"][15];
        form_inputs[0].placeholder = language["oro"][14];
        form_inputs[1].placeholder = language["oro"][15];
        form_inputs[2].value = language["oro"][16];
        footer_txt.innerText = language["oro"][8];
        contact_info[0].innerText = language["oro"][15];
        contact_info[1].innerText = language["oro"][17];
       }
       if(lang_ === "eng"){
            link[0].innerText = language["eng"][0];
            link[1].innerText = language["eng"][1];
            link[2].innerText = language["eng"][2];
            link[3].innerText = language["eng"][3];
            link[4].innerText = language["eng"][4];
            link[5].innerText = language["eng"][5];
            link[6].innerText = language["eng"][0];
            link[7].innerText = language["eng"][1];
            link[8].innerText = language["eng"][2];
            link[9].innerText = language["eng"][3];
            link[10].innerText = language["eng"][4];
            link[11].innerText = language["eng"][0];
            link[12].innerText = language["eng"][1];
            link[13].innerText = language["eng"][2];
            link[14].innerText = language["eng"][3];
            link[15].innerText = language["eng"][4];
            link[16].innerText = language["eng"][5];

            moto.innerText= language["eng"][6];
            call.innerText = language["eng"][7];
            about_text.innerText= language["eng"][8];
            gallery_txt.innerText= language["eng"][9];
            gallery_description[0].innerText= language["eng"][10];
            gallery_description[1].innerText= language["eng"][11];
            gallery_description[2].innerText= language["eng"][12];
            be_our.innerText = language["eng"][13];
            form_labels[0].innerText = language["eng"][14];
            form_labels[1].innerText = language["eng"][15];
            form_inputs[0].placeholder = language["eng"][14];
            form_inputs[1].placeholder = language["eng"][15];
            form_inputs[2].value = language["eng"][16];
            footer_txt.innerText = language["eng"][8];
            contact_info[0].innerText = language["eng"][15];
            contact_info[1].innerText = language["eng"][17];

       }
       if(lang_ === "amh"){
        link[0].innerText = language["amh"][0];
        link[1].innerText = language["amh"][1];
        link[2].innerText = language["amh"][2];
        link[3].innerText = language["amh"][3];
        link[4].innerText = language["amh"][4];
        link[5].innerText = language["amh"][5];
        link[6].innerText = language["amh"][0];
        link[7].innerText = language["amh"][1];
        link[8].innerText = language["amh"][2];
        link[9].innerText = language["amh"][3];
        link[10].innerText = language["amh"][4];
        link[11].innerText = language["amh"][0];
        link[12].innerText = language["amh"][1];
        link[13].innerText = language["amh"][2];
        link[14].innerText = language["amh"][3];
        link[15].innerText = language["amh"][4];
        link[16].innerText = language["amh"][5];

        moto.innerText= language["amh"][6];
        call.innerText = language["amh"][7];
        about_text.innerText= language["amh"][8];
        gallery_txt.innerText= language["amh"][9];
        gallery_description[0].innerText= language["amh"][10];
        gallery_description[1].innerText= language["amh"][11];
        gallery_description[2].innerText= language["amh"][12];
        be_our.innerText = language["amh"][13];
        form_labels[0].innerText = language["amh"][14];
        form_labels[1].innerText = language["amh"][15];
        form_inputs[0].placeholder = language["amh"][14];
        form_inputs[1].placeholder = language["amh"][15];
        form_inputs[2].value = language["amh"][16];
        footer_txt.innerText = language["amh"][8];
        contact_info[0].innerText = language["amh"][15];
        contact_info[1].innerText = language["amh"][17];
       }
}