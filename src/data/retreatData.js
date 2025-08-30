// Sample data - you can replace this with your actual data
export const retreatData = {
  // Cell Groups and Members
  cellGroups: [
    {
      id: 1,
      name: "Alpha Cell",
      leader: "John Smith",
      room: "Room 101",
      members: [
        { name: "Alice Johnson", password: "retreat2025" },
        { name: "Bob Wilson", password: "retreat2025" },
        { name: "Carol Davis", password: "retreat2025" },
        { name: "David Brown", password: "retreat2025" },
        { name: "Eva Garcia", password: "retreat2025" }
      ]
    },
    {
      id: 2,
      name: "Beta Cell",
      leader: "Sarah Miller",
      room: "Room 102",
      members: [
        { name: "Frank Lee", password: "retreat2025" },
        { name: "Grace Taylor", password: "retreat2025" },
        { name: "Henry Anderson", password: "retreat2025" },
        { name: "Ivy Martinez", password: "retreat2025" },
        { name: "Jack Thompson", password: "retreat2025" }
      ]
    },
    {
      id: 3,
      name: "Gamma Cell",
      leader: "Michael Chen",
      room: "Room 103",
      members: [
        { name: "Kate Rodriguez", password: "retreat2025" },
        { name: "Liam White", password: "retreat2025" },
        { name: "Mia Johnson", password: "retreat2025" },
        { name: "Noah Williams", password: "retreat2025" },
        { name: "Olivia Jones", password: "retreat2025" }
      ]
    },
    {
      id: 4,
      name: "Delta Cell",
      leader: "Emily Davis",
      room: "Room 104",
      members: [
        { name: "Paul Garcia", password: "retreat2025" },
        { name: "Quinn Miller", password: "retreat2025" },
        { name: "Rachel Wilson", password: "retreat2025" },
        { name: "Sam Brown", password: "retreat2025" },
        { name: "Tina Moore", password: "retreat2025" }
      ]
    }
  ],

  // Speakers
  speakers: [
    {
      id: 1,
      name: "Debora 사모님",
      title: "Morning Session Speaker",
      church: "Saving Grace",
      image: "/Images/DeboraSMN.jpg",
      bio: "Debora 사모님 will be leading our morning session",
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
        time: "10:00 PM",
        activity: "Worship & Prayer",
        location: "Main Hall"
      }
    ],
    saturday: [
      {
        time: "8:00 AM",
        activity: "Worship and Media Prep",
        location: "Main Hall"
      },
      {
        time: "8:00 - 9:00 AM",
        activity: "Breakfast",
        location: "Dining Area"
      },
      {
        time: "9:30 AM - 12:00 PM",
        activity: "Session 1: Samonim",
        speaker: "Debora 사모님",
        location: "Main Hall",
        note: "SMN will start her session at 10:00 AM"
      },
      {
        time: "12:00 - 1:00 PM",
        activity: "Lunch",
        location: "Dining Area"
      },
      {
        time: "1:00 - 1:45 PM",
        activity: "Cell Groups",
        location: "Dining Area",
        note: "around45 minutes"
      },
      {
        time: "1:45 - 3:20 PM",
        activity: "Games",
        location: "Outdoor Area",
        note: "1 hour"
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
        activity: "Session 2: Steve",
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
        time: "1:30 - 2:30 PM",
        activity: "Clean Up and Group Picture",
        location: "Various Locations"
      },
      {
        time: "3:00 PM",
        activity: "Departure Back to Seoul",
        location: "Meeting Point"
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

// Helper function to find member by name and password
export const findMember = (name, password) => {
  for (const cellGroup of retreatData.cellGroups) {
    const member = cellGroup.members.find(
      m => m.name.toLowerCase() === name.toLowerCase() && m.password === password
    );
    if (member) {
      return { member, cellGroup };
    }
  }
  return null;
};
