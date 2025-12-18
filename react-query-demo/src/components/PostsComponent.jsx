import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,   // data is fresh for 5 minutes
    cacheTime: 1000 * 60 * 10,  // cached for 10 minutes
    refetchOnWindowFocus: true, // refetch automatically when window gains focus
    keepPreviousData: true,     // keep old data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>{error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        Refetch Posts
      </button>

      {isFetching && <p>Updating data...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
