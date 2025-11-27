import axios from "axios";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=20`;

  try {
    const response = await axios.get(url);
    return response.data; // returns { total_count, items: [...] }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
