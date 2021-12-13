import DBoxes from './components/3D-Boxes/DBoxes';
import AnimatedCountdown from './components/Animated-Countdown/AnimatedCountdown';
import AutoText from './components/Auto-Text/AutoText';
import ButtonRipple from './components/Button-Ripple/ButtonRipple';
import CheckboxSliders from './components/Checkbox-Sliders/CheckboxSliders';
import DragNDrop from './components/DragDrop-Events/DragNDrop';
import Drawing from './components/Drawing/Drawing';
import FeedbackForm from './components/Feedback-Form/FeedbackForm';
import GithubProfiles from './components/GitHub-Profiles/GithubProfiles';
import HoverBoard from './components/Hover-Board/HoverBoard';
import ImageCarousel from './components/Image-Carousel/ImageCarousel';
import KineticLoader from './components/Kinetic-Loader/KineticLoader';
import LikeDoubleClick from './components/Like-DoubleClick/LikeDoubleClick';
import MobileTabNav from './components/Mobile-tab-nav/MobileTabNav';
import MovingGradient from './components/Moving-Gradient/MovingGradient';
import NavSidebar from './components/Nav-Sidebar/NavSidebar';
import NotesApp from './components/Notes-App/NotesApp';
import NumVerifyBox from './components/Number-Verify-Box/NumVerifyBox';
import PasswordGenerator from './components/Password-Generator/PasswordGenerator';
import PasswordStrength from './components/Password-Strength/PasswordStrength';
import PlaceholderCard from './components/Placeholder-Card/PlaceholderCard';
import PokeApi from './components/PokeAPI/PokeApi';
import QuizApp from './components/Quiz-App/QuizApp';
import ImgFeed from './components/Random-Image-Feed/ImgFeed';
import RangeSlider from './components/Range-Slider/RangeSlider';
import StickyNavbar from './components/Sticky-Navbar/StickyNavbar';
import Testimonial from './components/Testimonial-Box/Testimonial';
import ThemeClock from './components/Theme-Clock/ThemeClock';
import ToastNotification from './components/Toast-Notification/ToastNotification';
import TodoList from './components/Todo-List/TodoList';
import UserSearch from './components/User-Search/UserSearch';
import VerticalSlider from './components/Vertical-Slider/VerticalSlider';
import BackgroundSlider from './components/Background-Slider/BackgroundSlider';
import DrinkWater from './components/Drink-Water/DrinkWater';
import MediaCounter from './components/Media-Counter/MediaCounter';
import AnimatedNav from './components/Animated-Navigation/AnimatedNav';
import ChoicePicker from './components/Choice-Picker/ChoicePicker';
import FaqCards from './components/FAQ-Cards/FaqCards';
import GetKeyCode from './components/Get-Key-Code/GetKeyCode';
import DadJokes from './components/Dad-Jokes/DadJokes';
import SoundBoard from './components/Sound-Board/SoundBoard';
import FormWave from './components/Form-Wave/FormWave';
import SplitPage from './components/Split-Page/SplitPage';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import BlurryLoading from './components/Blurry-Loading/BlurryLoading';
import SearchBar from './components/Sliding-Search-Bar/SearchBar';
import SlidingNavigation from './components/Sliding-Navigation/SlidingNavigation';
import ExpandingCards from './components/Expanding-Cards/ExpandingCards';
import ProgressSteps from './components/Progress-Steps/ProgressSteps';
import { useState } from 'react';
import './App.css';
import ComponentMenu from './components/_Component-Menu/ComponentMenu';
function App() {
  const [selection, setSelection] = useState(null);
  // console.log(selection);
  const selectionHandler = (option) => {
    setSelection(option);
  };

  return (
    <>
      <ComponentMenu
        selectionValue={selection}
        selectionFn={selectionHandler}
      />
      {selection === null && (
        <div className={'welcome'}>
          <h1>Welcome to components DEMO</h1>
          <h3>Open menu in top left corner and select a component to load.</h3>
          <small style={{fontSize: '7px'}}>*All components are still WIP and do not represent the final product.</small>
        </div>
      )}
      {selection === 0 && <ExpandingCards />}
      {selection === 1 && <ProgressSteps />}
      {selection === 2 && <SlidingNavigation />}
      {selection === 3 && <SearchBar />}
      {selection === 4 && <BlurryLoading />}
      {selection === 5 && <ScrollAnimation />}
      {selection === 6 && <SplitPage />}
      {selection === 7 && <FormWave />}
      {selection === 8 && <SoundBoard />}
      {selection === 9 && <DadJokes />}
      {selection === 10 && <GetKeyCode />}
      {selection === 11 && <FaqCards />}
      {selection === 12 && <ChoicePicker />}
      {selection === 13 && <AnimatedNav />}
      {selection === 14 && <MediaCounter />}
      {selection === 15 && <DrinkWater />}
      {selection === 16 && <BackgroundSlider />}
      {selection === 17 && <ThemeClock />}
      {selection === 18 && <ButtonRipple />}
      {selection === 19 && <DragNDrop />}
      {selection === 20 && <Drawing />}
      {selection === 21 && <MovingGradient />}
      {selection === 22 && <PlaceholderCard />}
      {selection === 23 && <KineticLoader />}
      {selection === 24 && <StickyNavbar />}
      {selection === 25 && <VerticalSlider />}
      {selection === 26 && <ToastNotification />}
      {selection === 27 && <GithubProfiles />}
      {selection === 28 && <LikeDoubleClick />}
      {selection === 29 && <AutoText />}
      {selection === 30 && <PasswordGenerator />}
      {selection === 31 && <CheckboxSliders />}
      {selection === 32 && <NotesApp />}
      {selection === 33 && <AnimatedCountdown />}
      {selection === 34 && <ImageCarousel />}
      {selection === 35 && <HoverBoard />}
      {selection === 36 && <PokeApi />}
      {selection === 37 && <MobileTabNav />}
      {selection === 38 && <PasswordStrength />}
      {selection === 39 && <DBoxes />}
      {selection === 40 && <NumVerifyBox />}
      {selection === 41 && <UserSearch />}
      {selection === 42 && <FeedbackForm />}
      {selection === 43 && <RangeSlider />}
      {selection === 44 && <NavSidebar />}
      {selection === 45 && <QuizApp />}
      {selection === 46 && <Testimonial />}
      {selection === 47 && <ImgFeed />}
      {selection === 48 && <TodoList />}
    </>
  );
}

export default App;
