import Heading from '../heading/heading';
import RomanImg from '../roman-img/roman-img';

class RomanPage {
  render() {
    const heading = new Heading();
    const romanImg = new RomanImg();
    heading.render('Roman love');
    romanImg.render();

    import('ImageCaptionApp/ImageCaption').then((ImageCaptionModule) => {
      const ImageCaption = ImageCaptionModule.default;
      const caption = new ImageCaption();
      caption.render('test');
    });
  }
}

export default RomanPage;
