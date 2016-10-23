var ticketlist = [


        { team1: 'Habs', team2: 'Canucks', day: 2, month: 11, year: 2016, hour: 7, minute: 30, price: 220, section: [308] },
        { team1: 'Habs', team2: 'Flyers', day: 5, month: 11, year: 2016, hour: 7, minute: 0, price: 260, section: [308] },
        { team1: 'Habs', team2: 'Panthers', day: 15, month: 11, year: 2016, hour: 7, minute: 30, price: 220, section: [308, 322] },
        { team1: 'Habs', team2: 'Maple Leafs', day: 19, month: 11, year: 2016, hour: 7, minute: 0, price: 375, section: [308] },
        { team1: 'Habs', team2: 'Hurricanes', day: 24, month: 11, year: 2016, hour: 7, minute: 30, price: 200, section: [308] },
        { team1: 'Habs', team2: 'Avalanche', day: 10, month: 12, year: 2016, hour: 7, minute: 0, price: 325, section: [308, 322] },
        { team1: 'Habs', team2: 'Ducks', day: 20, month: 12, year: 2016, hour: 7, minute: 30, price: 220, section: [308, 322] },
        { team1: 'Habs', team2: 'Capitals', day: 9, month: 1, year: 2017, hour: 7, minute: 0, price: 280, section: [308] },
        { team1: 'Habs', team2: 'Rangers', day: 14, month: 1, year: 2017, hour: 7, minute: 30, price: 350, section: [322] },
        { team1: 'Habs', team2: 'Sabres', day: 21, month: 1, year: 2017, hour: 7, minute: 0, price: 260, section: [308] },
        { team1: 'Habs', team2: 'Flames', day: 24, month: 1, year: 2017, hour: 7, minute: 30, price: 220, section: [308, 322] },
        { team1: 'Habs', team2: 'Capitals', day: 4, month: 2, year: 2017, hour: 1, minute: 0, price: 350, section: [308, 322] },
        { team1: 'Habs', team2: 'Oilers', day: 5, month: 2, year: 2017, hour: 1, minute: 0, price: 350, section: [322] },
        { team1: 'Habs', team2: 'Blues', day: 11, month: 2, year: 2017, hour: 7, minute: 0, price: 325, section: [322] },
        { team1: 'Habs', team2: 'Jets', day: 18, month: 2, year: 2017, hour: 2, minute: 0, price: 260, section: [322] },
        { team1: 'Habs', team2: 'Islanders', day: 23, month: 2, year: 2017, hour: 7, minute: 30, price: 220, section: [308, 322] },
        { team1: 'Habs', team2: 'Blackhawks', day: 14, month: 3, year: 2017, hour: 7, minute: 30, price: 325, section: [310, 322] },
        { team1: 'Habs', team2: 'Senators', day: 19, month: 3, year: 2017, hour: 7, minute: 30, price: 280, section: [322] },
        { team1: 'Habs', team2: 'Red Wings', day: 21, month: 3, year: 2017, hour: 7, minute: 30, price: 220, section: [308, 322] },
        { team1: 'Habs', team2: 'Hurricanes', day: 23, month: 3, year: 2017, hour: 7, minute: 30, price: 200, section: [308] },
        { team1: 'Habs', team2: 'Senators', day: 25, month: 3, year: 2017, hour: 7, minute: 0, price: 350, section: [308, 322] },
        { team1: 'Habs', team2: 'Stars', day: 28, month: 3, year: 2017, hour: 7, minute: 30, price: 220, section: [308] },
        { team1: 'Habs', team2: 'Lightning', day: 7, month: 4, year: 2017, hour: 1, minute: 0, price: 350, section: [308, 322] }


];




ticketlist.map((ticket) => ticket.month--);

export default ticketlist;
