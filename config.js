const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_02_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVk9ERDBKZlI3bGRnM2tuVmJNQ2FRV2hscjZPNFpvNUFDL2pUc1haYk9VMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnZfdWx3a2tTS0sxNEtoVjFVOThlQVwiLFxuICBcInBob25lSWRcIjogXCIzN2I0ZjlmNi1lMDU0LTQ1OTMtYTM5Mi1mZTM5YTY1OTg5YmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTQ1LFxuICAgICAgMTg1LFxuICAgICAgMjI0LFxuICAgICAgMTEwLFxuICAgICAgMjQxLFxuICAgICAgODQsXG4gICAgICAxMzcsXG4gICAgICAyMjcsXG4gICAgICAzNCxcbiAgICAgIDE0NixcbiAgICAgIDEwNyxcbiAgICAgIDIxNSxcbiAgICAgIDE2OCxcbiAgICAgIDM2LFxuICAgICAgNDAsXG4gICAgICAxMTksXG4gICAgICAxLFxuICAgICAgMTMzLFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMjcsXG4gICAgICAxMzgsXG4gICAgICAxNjksXG4gICAgICA3MCxcbiAgICAgIDQsXG4gICAgICA2LFxuICAgICAgMzUsXG4gICAgICAyMzMsXG4gICAgICAyMDYsXG4gICAgICAxMDQsXG4gICAgICAxMDQsXG4gICAgICAyNDEsXG4gICAgICAxNTEsXG4gICAgICAyNDYsXG4gICAgICAyMzEsXG4gICAgICA1MixcbiAgICAgIDI0LFxuICAgICAgMjUzLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxLM0M0RU5FXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDE3MDU0NTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY0OTc0NTAxOTMwNzI6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWFYwTDBIRUl1TjNMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFBMnBPOVdiOGpsYUROdFdXWFhxa1cwUHhEa3FZeDRCNllLK3dXcHhKWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVlFvY0JmdGVwQXRzS0JOVmZacURuS2tUb0lralBPZ0U3YjBaeDVCYUUwSWZnV2pXWksvRXpoNVZvNzB0cENlTjBlS1RLTWIwLzBvQStKM3FBSlhlQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVk4blFhRHNtMXJ1dzBWbHNHL2xZV05WS21qc09WbGZOQlFwTzUxVXJObXFhL3MxNjJjZlhHUWRxbzJ5Zk1xc0NUakplVHB1L0daaDF6Uk1lRnUxZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQxNzA1NDU4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzc1NjU1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAwbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDBsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYlFVZS9GTFBsUURTM21VYk9zalJiWDdUaHBGdmNVSlJ6eTRqejczMUgwRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA4Mjk2MTY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzNzU2MjY3ODM4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
