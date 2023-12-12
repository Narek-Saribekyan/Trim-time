import React, { useState, Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
// import {DotsVerticalIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  isWithinInterval,
} from 'date-fns';

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-11T13:00',
    endDatetime: '2022-05-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T09:00',
    endDatetime: '2022-05-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T17:00',
    endDatetime: '2022-05-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-06-09T13:00',
    endDatetime: '2022-06-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-13T14:00',
    endDatetime: '2022-05-13T14:30',
  },
];
const bookings = [
  {
    id: 1,
    startDateTime: "2023-12-30T16:00",
    endDateTime: "2023-12-30T17:00"
  },
  {
    id: 2,
    startDateTime: "2023-12-30T13:00",
    endDateTime: "2023-12-30T15:00"
  },
  {
    id: 3,
    startDateTime: "2023-12-30T12:00",
    endDateTime: "2023-12-30T12:30"
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Meeting({ meeting }) {

  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);


  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img src={meeting.imageUrl} alt="" className="flex-none w-10 h-10 rounded-full" />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>{format(startDateTime, 'h:mm a')}</time> -{' '}
          <time dateTime={meeting.endDatetime}>{format(endDateTime, 'h:mm a')}</time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

export default function Example(props) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  const [date, setDate] = useState({
    justDate: selectedDay,
    dateTime: null
  })
  console.log(date);
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  // let selectedDayMeetings = meetings.filter((meeting) =>
  //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
  // );
  const GetTimes = (e) => {
    // e.split('-')
    // console.log(e);

    const longetivity = parseInt(useSelector((state) => state.toolkit.time));

    const check = Math.ceil(longetivity / 30) * 30
    const { justDate } = date
    const beginingNumber = parseInt(e.substring(0, 2));
    const endNumber = parseInt(e.substring(3));

    const begining = add(justDate, { hours: beginingNumber })
    const end = add(justDate, { hours: endNumber })
    const interval = 30

    const times = []

    for (let i = begining; i < end; i = add(i, { minutes: interval })) {
      const timeTOCheck = add(i, { minutes: check })
      let isWithinAnyBooking = false;

      bookings?.some((el) => {
        const bookingStart = new Date(el.startDateTime);
        const bookingEnd = new Date(el.endDateTime);
    
        if (isWithinInterval(timeTOCheck, { start: bookingStart, end: bookingEnd })) {
          isWithinAnyBooking = true;
          return true; // exit the loop early since we found a booking
        }
    
        return false;
      });
    
      if (!isWithinAnyBooking) {
        times.push(i);
      }
    }
    return times
  }

  const longetivity = parseInt(useSelector((state) => state.toolkit.time));
  const times = GetTimes(props.workingTimes)
  // console.log(times);
  useEffect(() => {
    const getTimes = (e,longetivity) => {
    const check = Math.ceil(longetivity / 30) * 30
    const { justDate } = date
    const beginingNumber = parseInt(e.substring(0, 2));
    const endNumber = parseInt(e.substring(3));

    const begining = add(justDate, { hours: beginingNumber })
    const end = add(justDate, { hours: endNumber })
    const interval = 30

    const times = []

    for (let i = begining; i < end; i = add(i, { minutes: interval })) {
      const timeTOCheck = add(i, { minutes: check })
      let isWithinAnyBooking = false;

      bookings?.some((el) => {
        const bookingStart = new Date(el.startDateTime);
        const bookingEnd = new Date(el.endDateTime);
    
        if (isWithinInterval(timeTOCheck, { start: bookingStart, end: bookingEnd })) {
          isWithinAnyBooking = true;
          return true; // exit the loop early since we found a booking
        }
    
        return false;
      });
    
      if (!isWithinAnyBooking) {
        times.push(i);
      }
    }
    return times
    }
    console.log('I re-rendered');
    const times = getTimes(props.workingTimes,longetivity)
  }, [date.justDate,longetivity])

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    // onClick={() => setSelectedDay(day)}
                    onClick={() => setDate((prev) => ({ ...prev, justDate: day }))}
                    className={classNames(
                      isEqual(day, date.justDate) && 'text-white',
                      !isEqual(day, date.justDate) &&
                      isToday(day) &&
                      'text-red-500',
                      !isEqual(day, date.justDate) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-900',
                      !isEqual(day, date.justDate) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-400',
                      isEqual(day, date.justDate) && isToday(day) && 'bg-red-500',
                      isEqual(day, date.justDate) &&
                      !isToday(day) &&
                      'bg-gray-900',
                      !isEqual(day, date.justDate) && 'hover:bg-gray-200',
                      (isEqual(day, date.justDate) || isToday(day)) &&
                      'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(date.justDate, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4  text-sm leading-6 grid grid-cols-7 gap-1 text-gray-500">
              {/* {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )} */}
              {times?.map((time, i) => {
                return <div key={`time-${i}`} className='rounded-sm bg-gray-100  hover:cursor-pointer hover:bg-gray-300'>
                  <button className='p-2' onClick={() => { setDate((prev) => ({ ...prev, dateTime: time })) }}>
                    {format(time, "kk:mm")}
                  </button>
                </div>
              })}

            </ol>
            <div className='mt-2'>
            {date.dateTime !== null
                ? <h1 className='flex-1'>{format(date.dateTime, "yyyy-MM-dd' 'kk:mm")}</h1>
                : null
              }
            </div>
          </section>
        </div>
      </div>
    </div>
    // <>
    //   <div>
    //     <Calendar
    //       minDate={new Date()}
    //       view='month'
    //       onClick={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
    //     />
    //     {times?.map((time, i) => {
    //       return <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
    //         <button onClick={() => { setDate((prev) => ({ ...prev, dateTime: time })) }}>
    //           {format(time, "kk:mm")}
    //         </button>
    //       </div>
    //     })}
    //   </div>
    //   <div>

    //   </div>
    // </>
  );
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
