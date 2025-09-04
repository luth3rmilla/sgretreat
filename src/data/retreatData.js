import participantsData from './retreat_participants.json';

export const retreatData = {
  // Cell Groups and Members
  cellGroups: participantsData,

  // Speakers
  speakers: [
    {
      id: 1,
      name: "Deborah 사모님",
      title: "Morning Session Speaker",
      church: "Saving Grace",
      image: "/Images/DeboraSMN.jpg",
      bio: "Deborah 사모님 will be leading our morning session",
      sessions: [
        {
          title: "Morning Session",
          time: "Saturday 9:30 AM - 12:00 PM",
          description: "morning session with Debora 사모님."
        }
      ]
    },
    {
      id: 2,
      name: "Steve Lee",
      title: "Evening Session Speaker",
      church: "Saving Grace",
      image: "/Images/SteveLee.jpg",
      bio: "Former Head elder Steve Lee will be leading our evening session",
      sessions: [
        {
          title: "Evening Session",
          time: "Saturday 7:30 PM - 9:30 PM",
          description: "Evening Session with Steve Lee."
        }
      ]
    },{
        id: 3,
        name: "Pastor June Kim",
        title: "Sunday Speaker",
        church: "Saving Grace",
        image: "/Images/PastorJune.jpg",
        bio: "Former elder of Saving Grace Pastor June will be leading our Sunday Service",
        sessions: [
          {
            title: "Sunday Service",
            time: "Sunday 11:00 AM - 1:30 PM",
            description: "Sunday Service with Pastor June."
          }
        ]
      }
  ],

  // Schedule
  schedule: {
    friday: [
      {
        time: "08:00 PM",
        activity: "Departure from church",
        location: "Church"
      },{
        time: "10:00 PM",
        activity: "Worship & Prayer",
        location: "Main Hall"
      }
    ],
    saturday: [
      {
        time: "8:00 - 9:00 AM",
        activity: "Breakfast",
        location: "Dining Area"
      },
      {
        time: "9:30 AM - 12:00 PM",
        activity: "Morning Session",
        speaker: "Deborah 사모님",
        location: "Main Hall",
        note: "SMN will start her session at 10:00 AM"
      },
      {
        time: "12:00 - 1:30 PM",
        activity: "Lunch and Cell Groups",
        location: "Dining Area",
        note: "The cell groups should seat together for Lunch"
      },
      {
        time: "1:45 - 3:20 PM",
        activity: "Games",
        location: "Outdoor Area",
      },
      {
        time: "3:30 - 4:00 PM",
        activity: "Baptism Prep",
        location: "Pool Area"
      },
      {
        time: "4:00 PM",
        activity: "Baptism",
        location: "Pool Area"
      },
      {
        time: "6:00 PM",
        activity: "Dinner",
        location: "Dining Area"
      },
      {
        time: "7:30 - 9:30 PM",
        activity: "Evening Session",
        speaker: "Steve Lee",
        location: "Main Hall"
      },
      {
        time: "9:30 - 10:30 PM",
        activity: "Cell Group",
        location: "Assigned Rooms"
      }
    ],
    sunday: [
      {
        time: "9:00 - 10:00 AM",
        activity: "Breakfast",
        location: "Dining Area"
      },
      {
        time: "11:00 AM - 1:30 PM",
        activity: "Sunday Worship",
        speaker: "Pastor June Kim",
        location: "Main Hall"
      },
      {
        time: "1:30 - 2:20 PM",
        activity: "Clean Up and Group Picture",
        location: "Various Locations"
      },
      {
        time: "2:30 PM",
        activity: "Departure Back to Seoul",
        location: "Parking Lot"
      }
    ]
  },

  // PDF Downloads
  pdfDownloads: {
    morningSessions: {
      title: "Morning Sessions Guide",
      filename: "morning-sessions-guide.pdf",
      description: "Complete guide for all morning sessions and activities"
    },
    afternoonSessions: {
      title: "Afternoon Sessions Guide", 
      filename: "afternoon-sessions-guide.pdf",
      description: "Complete guide for all afternoon sessions and activities"
    }
  }
};

// Updated findMember function to work with name + birthday
export const findMember = (name, birthday) => {
  return participantsData.find(
    member => 
      member.name.toLowerCase() === name.toLowerCase() && 
      member.birthday === birthday
  );
};

// Helper function to get all members of a specific cell group
export const getCellGroupMembers = (cellGroupName) => {
  return participantsData.filter(member => member.cell === cellGroupName);
};
