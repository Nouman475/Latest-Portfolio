import "./../styles/FooterStyles.css";
let thisYear = new Date().getFullYear();
function Footer() {
  return (
    
    <footer className="mt-0">
      <div>
        <footer className="footer">
          <ul className="social-icons">
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.facebook.com/profile.php?id=100079394321739"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.linkedin.com/in/muhammad-nouman-7a6722261/"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.instagram.com/byte__ninja/"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <p>&copy;{thisYear} Muhammad Nouman | All Rights Reserved</p>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
