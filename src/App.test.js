import { render, screen, } from '@testing-library/react';
import App from './App';
import VideoInfo from './VideoInfo';

const props = {
  channelImage : "/youtubeLogo.jpg",
  title : "Youtube Clone App using Reactjs",
  viewCount : "290"
}

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("rendering",()=>{

  const {getByTestId,getByText} = render(<VideoInfo {...props}/>)

expect(getByTestId('videoinfo-img')).toBeInTheDocument()
expect(getByText("Youtube Clone App using Reactjs")).toBeInTheDocument()
expect(getByText("SHARE")).toBeInTheDocument()

screen.debug()
})




