function App() {
  return (
    <div>
      <HomePage />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
