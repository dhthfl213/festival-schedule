// FestivalCalendar.js
import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import './FestivalCalendar.css'; // CSS 파일 경로 추가

const locales = {
  'ko-KR': require('date-fns/locale/ko'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: '축제 1',
    start: new Date(2024, 10, 10), // 2024년 11월 10일
    end: new Date(2024, 10, 11),   // 2024년 11월 11일
  },
  {
    title: '축제 2',
    start: new Date(2024, 10, 15), // 2024년 11월 15일
    end: new Date(2024, 10, 16),   // 2024년 11월 16일
  },
];

const FestivalCalendar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> {/* 중앙 정렬을 위한 스타일 추가 */}
      <div style={{ width: '80%' }}> {/* 캘린더를 감싸는 div 추가 */}
        <br>
        </br>
        <br>
        </br>
        <h2>축제 일정</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, width: '100%', margin: '0 auto' }} // width를 100%로 설정
        />
        </div>
    </div>
  );
};

export default FestivalCalendar;