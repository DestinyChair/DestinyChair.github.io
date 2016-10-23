# hockey-app
Tickets for hockey games viewable by selecting dates from a calendar

You must have nodeJS installed.

TO RUN:
1. open cmd prompt or terminal
2. navigate to root folder for app
3. npm install
4. npm start
5. open browser and go to localhost:8080


TO ADD TICKETS:
1. navigate to src folder
2. open ticket_list.js
3. fill out tickets in format provided i.e.
    var ticket = [
        {team1:a, team2:b, day:x, month:x, year:x, hour:x, minute:x, price:x, section:x },
        {team1:a, team2:b, day:x, month:x, year:x, hour:x, minute:x, price:x, section:x },
        ...
        {team1:a, team2:b, day:x, month:x, year:x, hour:x, minute:x, price:x, section:x }
    ]


TO ADD IMAGES: 
1. navigate to images/tickets
2. place .jpg file
3. make sure it is named properly
name of file = ##month##daysection.jpg i.e.
    a game jan 2nd in section 300 = 0102300.jpg
    a game nov 28th in section 215 = 1128215.jpg