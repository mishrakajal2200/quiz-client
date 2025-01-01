import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherDashboard = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quiz/results", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure authentication
          },
        });
        setResults(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching results:", error);
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) return <p>Loading results...</p>;

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Username</th>
            <th>Test</th>
            <th>Score</th>
            <th>Attempted</th>
            <th>Total Questions</th>
            <th>Time Taken (seconds)</th>
            <th>Submission Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result._id}>
              <td>{result.username}</td> {/* Assuming username is sent in the response */}
              <td>{result.testId.name || "Test Name"}</td> {/* Ensure testId is populated */}
              <td>{result.correctAnswers}</td>
              <td>{result.attemptedQuestions}</td>
              <td>{result.totalQuestions}</td>
              <td>{result.timeTaken}</td>
              <td>{new Date(result.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherDashboard;
