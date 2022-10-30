import '../index.css'
const Footer = () => {
    const year = new Date().getFullYear();
    return <footer>{`© ${year} Made by Kirk Patrick. `}<span> twitter → <a href='https://twitter.com/drwambua' target='_blank' rel='noreferrer'>@DrWambua</a></span></footer>;
};

export default Footer;