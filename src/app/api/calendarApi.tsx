export interface CalendarTime {
  time: string;
  state: "booked" | "available" | "pending";
  client: any;
}

export interface CalendarDate {
  date: string;
  calendar: CalendarTime[];
}

type CalendarApiProps = CalendarDate[];

const Calendar: CalendarApiProps = [
  {
    date: "2022-01-31",
    calendar: [
      {
        time: "08:30 - 10:00",
        state: "pending",
        client: {},
      },
      {
        time: "10:30 - 12:00",
        state: "available",
        client: {},
      },
      {
        time: "12:00 - 13:30",
        state: "available",
        client: {},
      },
      {
        time: "13:30 - 15:00",
        state: "booked",
        client: {},
      },
      {
        time: "15:00 - 16:30",
        state: "available",
        client: {},
      },
      {
        time: "16:30 - 18:00",
        state: "available",
        client: {},
      },
      {
        time: "18:00 - 19:30",
        state: "available",
        client: {},
      },
      {
        time: "19:30 - 21:00",
        state: "available",
        client: {},
      },
      {
        time: "21:00 - 22:30",
        state: "available",
        client: {},
      },
      {
        time: "22:30 - 24:00",
        state: "available",
        client: {},
      },
    ],
  },
  {
    date: "2022-01-30",
    calendar: [
      {
        time: "08:30 - 10:00",
        state: "booked",
        client: {},
      },
      {
        time: "10:30 - 12:00",
        state: "available",
        client: {},
      },
      {
        time: "12:00 - 13:30",
        state: "available",
        client: {},
      },
      {
        time: "13:30 - 15:00",
        state: "booked",
        client: {},
      },
      {
        time: "15:00 - 16:30",
        state: "available",
        client: {},
      },
      {
        time: "16:30 - 18:00",
        state: "available",
        client: {},
      },
      {
        time: "18:00 - 19:30",
        state: "available",
        client: {},
      },
      {
        time: "19:30 - 21:00",
        state: "available",
        client: {},
      },
      {
        time: "21:00 - 22:30",
        state: "available",
        client: {},
      },
      {
        time: "22:30 - 24:00",
        state: "available",
        client: {},
      },
    ],
  },
  {
    date: "2022-02-02",
    calendar: [
      {
        time: "08:30 - 10:00",
        state: "available",
        client: {},
      },
      {
        time: "10:30 - 12:00",
        state: "booked",
        client: {},
      },
      {
        time: "12:00 - 13:30",
        state: "available",
        client: {},
      },
      {
        time: "13:30 - 15:00",
        state: "booked",
        client: {},
      },
      {
        time: "15:00 - 16:30",
        state: "available",
        client: {},
      },
      {
        time: "16:30 - 18:00",
        state: "available",
        client: {},
      },
      {
        time: "18:00 - 19:30",
        state: "available",
        client: {},
      },
      {
        time: "19:30 - 21:00",
        state: "available",
        client: {},
      },
      {
        time: "21:00 - 22:30",
        state: "available",
        client: {},
      },
      {
        time: "22:30 - 24:00",
        state: "available",
        client: {},
      },
    ],
  },
];

export const addNewDayToCalendar: CalendarDate = {
  date: "",
  calendar: [
    {
      time: "08:30 - 10:00",
      state: "available",
      client: {},
    },
    {
      time: "10:30 - 12:00",
      state: "available",
      client: {},
    },
    {
      time: "12:00 - 13:30",
      state: "available",
      client: {},
    },
    {
      time: "13:30 - 15:00",
      state: "available",
      client: {},
    },
    {
      time: "15:00 - 16:30",
      state: "available",
      client: {},
    },
    {
      time: "16:30 - 18:00",
      state: "available",
      client: {},
    },
    {
      time: "18:00 - 19:30",
      state: "available",
      client: {},
    },
    {
      time: "19:30 - 21:00",
      state: "available",
      client: {},
    },
    {
      time: "21:00 - 22:30",
      state: "available",
      client: {},
    },
    {
      time: "22:30 - 24:00",
      state: "available",
      client: {},
    },
  ],
};

export const CalendarApi = {
  getCalendarOfDay(date: string) {
    const dateToReturn = Calendar.filter((t) => t.date === date);
    if (dateToReturn.length === 0) {
      const newDate = { ...addNewDayToCalendar, date };
      Calendar.push(newDate);
      return [newDate];
    }
    return dateToReturn;
  },
};
