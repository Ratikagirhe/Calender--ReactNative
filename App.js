


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// const generateCalendar = (year, month) => {
//   const totalDays = daysInMonth(year, month);
//   const firstDayIndex = new Date(year, month, 1).getDay();
//   const weeks = [];

//   let dayCounter = 1;
//   for (let i = 0; i < 6; i++) {
//     const week = [];
//     for (let j = 0; j < 7; j++) {
//       if ((i === 0 && j < firstDayIndex) || dayCounter > totalDays) {
//         week.push(null);
//       } else {
//         week.push(dayCounter);
//         dayCounter++;
//       }
//     }
//     weeks.push(week);
//     if (dayCounter > totalDays) break;
//   }

//   return weeks;
// };

// const themeStyles = StyleSheet.create({
//   upperTheme: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   themeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     flex: 1,
//     marginTop: 5,
//   },
// });

// const CalendarApp = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const handlePrevMonth = () => {
//     const prevMonth = new Date(currentMonth);
//     prevMonth.setMonth(prevMonth.getMonth() - 1);
//     setCurrentMonth(prevMonth);
//   };

//   const handleNextMonth = () => {
//     const nextMonth = new Date(currentMonth);
//     nextMonth.setMonth(nextMonth.getMonth() + 1);
//     setCurrentMonth(nextMonth);
//   };

//   const calendarData = generateCalendar(currentMonth.getFullYear(), currentMonth.getMonth());

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Calendar App</Text> {/* Heading */}
//       <ImageBackground
//         source={require('./assets/lake-forest-and-mountains.jpg')} // Replace with actual image path
//         style={styles.upperImage}
//         resizeMode="cover"
//       >
//         <View style={themeStyles.upperTheme}>
//           <TouchableOpacity onPress={handlePrevMonth}>
//             <Icon name="angle-left" style={styles.arrow} />
//           </TouchableOpacity>
//           <Text style={themeStyles.themeText}>
//             {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
//           </Text>
//           <TouchableOpacity onPress={handleNextMonth}>
//             <Icon name="angle-right" style={styles.arrow} />
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//       <View style={styles.calendar}>
//         <View style={styles.daysOfWeek}>
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//             <Text key={day} style={styles.dayOfWeek}>
//               {day}
//             </Text>
//           ))}
//         </View>
//         {calendarData.map((week, weekIndex) => (
//           <View key={weekIndex} style={styles.week}>
//             {week.map((day, dayIndex) => (
//               <View
//                 key={dayIndex}
//                 style={[
//                   styles.day,
//                   day === null ? styles.emptyDay : null,
//                   day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth()
//                     ? styles.currentDay
//                     : null,
//                 ]}
//               >
//                 {day !== null && <Text style={styles.dayText}>{day}</Text>}
//               </View>
//             ))}
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   upperImage: {
//     height: 180, // Adjust the height as needed
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrow: {
//     fontSize: 24,
//     color: 'white',
//   },
//   calendar: {
//     flex: 1,
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
//   daysOfWeek: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   dayOfWeek: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   week: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   day: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 15,
//     backgroundColor: '#fff',
//   },
//   emptyDay: {
//     backgroundColor: 'transparent',
//   },
//   currentDay: {
//     backgroundColor: '#007AFF',
//   },
//   dayText: {
//     color: '#333',
//   },
// });

// export default CalendarApp;





// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// const generateCalendar = (year, month) => {
//   const totalDays = daysInMonth(year, month);
//   const firstDayIndex = new Date(year, month, 1).getDay();
//   const weeks = [];

//   let dayCounter = 1;
//   for (let i = 0; i < 6; i++) {
//     const week = [];
//     for (let j = 0; j < 7; j++) {
//       if ((i === 0 && j < firstDayIndex) || dayCounter > totalDays) {
//         week.push(null);
//       } else {
//         week.push(dayCounter);
//         dayCounter++;
//       }
//     }
//     weeks.push(week);
//     if (dayCounter > totalDays) break;
//   }

//   return weeks;
// };

// const themeStyles = StyleSheet.create({
//   upperTheme: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   themeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     flex: 1,
//     marginTop: 5,
//   },
// });

// const CalendarApp = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const handlePrevMonth = () => {
//     const prevMonth = new Date(currentMonth);
//     prevMonth.setMonth(prevMonth.getMonth() - 1);
//     setCurrentMonth(prevMonth);
//   };

//   const handleNextMonth = () => {
//     const nextMonth = new Date(currentMonth);
//     nextMonth.setMonth(nextMonth.getMonth() + 1);
//     setCurrentMonth(nextMonth);
//   };

//   const calendarData = generateCalendar(currentMonth.getFullYear(), currentMonth.getMonth());

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Calendar App</Text>
//       <ImageBackground
//         source={require('./assets/lake-forest-and-mountains.jpg')} // Replace with actual image path
//         style={styles.upperImage}
//         resizeMode="cover"
//       >
//         <View style={themeStyles.upperTheme}>
//           <TouchableOpacity onPress={handlePrevMonth}>
//             <Icon name="angle-left" style={styles.arrow} />
//           </TouchableOpacity>
//           <Text style={themeStyles.themeText}>
//             {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
//           </Text>
//           <TouchableOpacity onPress={handleNextMonth}>
//             <Icon name="angle-right" style={styles.arrow} />
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//       <View style={styles.calendar}>
//         <View style={styles.daysOfWeek}>
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//             <Text key={day} style={styles.dayOfWeek}>
//               {day}
//             </Text>
//           ))}
//         </View>
//         {calendarData.map((week, weekIndex) => (
//           <View key={weekIndex} style={styles.week}>
//             {week.map((day, dayIndex) => (
//               <View
//                 key={dayIndex}
//                 style={[
//                   styles.day,
//                   day === null ? styles.emptyDay : null,
//                   day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth()
//                     ? styles.currentDay
//                     : null,
//                 ]}
//               >
//                 {day !== null && <Text style={styles.dayText}>{day}</Text>}
//               </View>
//             ))}
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   upperImage: {
//     height: 180,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrow: {
//     fontSize: 24,
//     color: 'white',
//   },
//   calendar: {
//     flex: 1,
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
//   daysOfWeek: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   dayOfWeek: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   week: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   day: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 15,
//     backgroundColor: '#fff',
//   },
//   emptyDay: {
//     backgroundColor: 'transparent',
//   },
//   currentDay: {
//     backgroundColor: '#007AFF',
//   },
//   dayText: {
//     color: '#333',
//   },
// });

// export default CalendarApp;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const generateCalendar = (year, month) => {
  const totalDays = daysInMonth(year, month);
  const firstDayIndex = new Date(year, month, 1).getDay();
  const weeks = [];

  let dayCounter = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayIndex) || dayCounter > totalDays) {
        week.push(null);
      } else {
        week.push(dayCounter);
        dayCounter++;
      }
    }
    weeks.push(week);
    if (dayCounter > totalDays) break;
  }

  return weeks;
};

const themeStyles = StyleSheet.create({
  upperTheme: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the arrows horizontally
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  themeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
    marginTop: 5,
  },
});

const CalendarApp = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const calendarData = generateCalendar(currentMonth.getFullYear(), currentMonth.getMonth());

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calendar App</Text>
      <ImageBackground
        source={require('./assets/lake-forest-and-mountains.jpg')} // Replace with actual image path
        style={styles.upperImage}
        resizeMode="cover"
      >
        <View style={themeStyles.upperTheme}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <Icon name="angle-left" style={styles.arrow} />
          </TouchableOpacity>
          <Text style={themeStyles.themeText}>
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Icon name="angle-right" style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.calendar}>
        <View style={styles.daysOfWeek}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Text key={day} style={styles.dayOfWeek}>
              {day}
            </Text>
          ))}
        </View>
        {calendarData.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.week}>
            {week.map((day, dayIndex) => (
              <View
                key={dayIndex}
                style={[
                  styles.day,
                  day === null ? styles.emptyDay : null,
                  day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth()
                    ? styles.currentDay
                    : null,
                ]}
              >
                {day !== null && <Text style={styles.dayText}>{day}</Text>}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  upperImage: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    color: 'white',
    
  },
  calendar: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayOfWeek: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  emptyDay: {
    backgroundColor: 'transparent',
  },
  currentDay: {
    backgroundColor: '#007AFF',
  },
  dayText: {
    color: '#333',
  },
});

export default CalendarApp;
