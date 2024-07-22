const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348067557472";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_13_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlNDNDalkxdzVOaG8yZkF6T2t0amxLU3pDZEx5MDUwbTJiWWlsT1M3N1FvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFX2VHT214aFQzaUlYMUZlTnQzYmpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFmMWViNjMyLTdiY2YtNDBhNC04ZmJjLTg4NzhlNGVhOWYzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAyMDcsXG4gICAgICA0NyxcbiAgICAgIDc3LFxuICAgICAgMjQsXG4gICAgICAxNjQsXG4gICAgICAyMDgsXG4gICAgICAyMjMsXG4gICAgICA5MCxcbiAgICAgIDE3LFxuICAgICAgNzQsXG4gICAgICAxNDQsXG4gICAgICAxNzMsXG4gICAgICAxODcsXG4gICAgICAxMzMsXG4gICAgICA4OCxcbiAgICAgIDE4NSxcbiAgICAgIDIwNSxcbiAgICAgIDU2LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICA1NSxcbiAgICAgIDExMixcbiAgICAgIDEzNyxcbiAgICAgIDAsXG4gICAgICAxNzIsXG4gICAgICAxMzcsXG4gICAgICAyMzUsXG4gICAgICA5NSxcbiAgICAgIDE4NSxcbiAgICAgIDYxLFxuICAgICAgMTMxLFxuICAgICAgMTAyLFxuICAgICAgMTE5LFxuICAgICAgNzEsXG4gICAgICAxODUsXG4gICAgICAxOTEsXG4gICAgICAzMSxcbiAgICAgIDEwMSxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRTY5R01RVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NzU1NzQ3Mjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ1OTU0MjU0NTIyNDc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYjduK0VIRU1uaCtMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhpbFBKS2hNMFoxMk9iVWNRVEZYK0E0eVdxLzY5Z25BbkxGaXB6REhUbW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGNtMjlFbzA2RVlwRmF2bkhoMGNUOUdaMWRiNUpVbFV1QlAxQ0lPOTJYUFhxejFvWjd5bWp0SWkwZTFrMGNuNS94ZVVXYWdHSGVMYnRaWTdHbTB4RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ0w2bnVWVGdZTTFpdDduR0VMRUxOaXBVY2J3ei83TGhYeERSZHgvTG9Ldml4SVJLWVg2amR3K2czUmMwZjl5YlNpS0MzRFJKbmhzM0J4UWt5a0UvZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NzU1NzQ3Mjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY0MzIxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs5dlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzl2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQjZMOUxLcTdheE5tZlRsQ3hoVm5Kd1d5OS92dWk2MStYYnhLQVM2UTgxND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDgyOTk1NjM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUyMDcyMTM1NjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
