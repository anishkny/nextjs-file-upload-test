function HomePage() {
  return (
    <form action="/api/upload" method="post" encType="multipart/form-data">
      <input type="text" name="name" />
      <input type="file" name="avatar" />
      <input type="submit" value="Upload" />
    </form>
  );
}

export default HomePage;
