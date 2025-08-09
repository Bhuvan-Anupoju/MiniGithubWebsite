import React, { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGitHubData = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      setUserData(null);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>GitHub Profile Finder</h2>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchGitHubData} style={styles.button}>
          Search
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {userData && (
        <div style={styles.card}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={styles.avatar}
          />
          <h3>{userData.name || userData.login}</h3>
          <p>{userData.bio || "No bio available"}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

// Simple CSS-in-JS for responsiveness
const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    flex: "1 1 200px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#24292e",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#0366d6",
    textDecoration: "none",
  },
  error: {
    color: "red",
  },
};

export default Search;
