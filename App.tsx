import React, { useState } from 'react';

interface Reading {
  date: string;
  time: string;
  systolic: number;
  diastolic: number;
}

const App = () => {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [systolic, setSystolic] = useState(0);
  const [diastolic, setDiastolic] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReadings([...readings, { date, time, systolic, diastolic }]);
    setDate(new Date().toISOString().split('T')[0]);
    setTime(new Date().toLocaleTimeString());
    setSystolic(0);
    setDiastolic(0);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">HealthNmore Blood Pressure Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="date">Date:</label>
          <input
            className="p-2 border border-gray-300 rounded"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="time">Time:</label>
          <input
            className="p-2 border border-gray-300 rounded"
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="systolic">Systolic:</label>
          <input
            className="p-2 border border-gray-300 rounded"
            type="number"
            id="systolic"
            value={systolic}
            onChange={(e) => setSystolic(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-bold mb-2" htmlFor="diastolic">Diastolic:</label>
          <input
            className="p-2 border border-gray-300 rounded"
            type="number"
            id="diastolic"
            value={diastolic}
            onChange={(e) => setDiastolic(Number(e.target.value))}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Record Reading
        </button>
      </form>
      <h2 className="text-2xl font-bold text-blue-500 mt-4 mb-2">Previous Readings:</h2>
      <ul>
        {readings.map((reading, index) => (
          <li key={index} className="flex flex-col mb-4 p-2 border border-gray-300 rounded">
            <p>Date: {reading.date}</p>
            <p>Time: {reading.time}</p>
            <p>Systolic: {reading.systolic}</p>
            <p>Diastolic: {reading.diastolic}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;