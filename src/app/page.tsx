import Nav_bar from "./_components/nav-bar";
import DrivingLessons from "./_components/driving-lessons";
import BookLessons from "./_components/book-lessons";
export default function Home() {
  return (
    <div className="h-screen bg-[#fafcfd]">
      <Nav_bar />
      <DrivingLessons />
      <BookLessons />
    </div>
  );
}
