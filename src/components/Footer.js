import React from 'react';
import "../styles/footer.scss";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPhone, faEnvelope, faMapLocation, faFaceSmile, faHouse, faHeart, faCode} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className='Footer maxWidth1400px'>
            <div className='Footer-item'>
                <h3>Library</h3>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} /><p>Email: <Link href='mailto:truonghoailinh3103@gmail.com'>truonghoailinh3103</Link></p></li>
                    <li><FontAwesomeIcon icon={faMapLocation} /><p>Address: <Link href="#Map">12 District , TP. HCM</Link></p></li>
                    <li><FontAwesomeIcon icon={faPhone} /><p>Hotline: <Link href='tel:0356381315'>0356381315</Link></p></li>
                    <li><FontAwesomeIcon icon={faFaceSmile} /><p>Zalo: <Link href='tel:0963301494'>0963301494</Link></p></li>
                </ul>
                <iframe id='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.676924801197!2d106.61073737481892!3d10.836017458092249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bcce986a785%3A0x6538604bf47e8288!2zMTIgVMOibiBUaOG7m2kgTmjhuqV0IDUsIFTDom4gVGjhu5tpIE5o4bqldCwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699268326633!5m2!1svi!2s" 
                    width="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='Footer-item'>
                <h3>Menu</h3>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faHouse} /><Link href="/">Home</Link></li>
                    <li><FontAwesomeIcon icon={faHeart} /><Link href="/wishlist">Wishlist</Link></li>
                    <li><FontAwesomeIcon icon={faCode} /><Link href="/product/document">Document</Link></li>
                    <li><FontAwesomeIcon icon={faBook} /><Link href="/product/comic">Comic</Link></li>
                </ul>
            </div>
            <div className='Footer-item'>
                <h3>Social Network</h3>
                <hr />
                <div className='Footer-item_social'>
                    <a href='https://web.facebook.com/profile.php?id=61551727813662'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 100 100">
                            <path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"></path><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#fce0a2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"></path><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"></path><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"></path><g><path fill="#78a2d2" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"></path></g><g><path fill="#472b29" d="M68.164,59.445c-0.073,0-0.148-0.017-0.219-0.051c-0.248-0.121-0.351-0.42-0.23-0.668 c0.132-0.271,0.256-0.543,0.375-0.818c0.46-1.068,0.826-2.186,1.087-3.318c0.062-0.27,0.333-0.437,0.6-0.375 c0.269,0.063,0.437,0.331,0.375,0.6c-0.275,1.191-0.66,2.366-1.144,3.49c-0.125,0.289-0.256,0.575-0.395,0.859 C68.527,59.342,68.349,59.445,68.164,59.445z"></path></g><g><path fill="#472b29" d="M70.264,52.336c-0.015,0-0.03-0.001-0.045-0.002c-0.275-0.024-0.478-0.268-0.453-0.543 c0.039-0.429,0.063-0.857,0.074-1.286c0.067-2.666-0.39-5.273-1.358-7.752c-0.101-0.257,0.027-0.547,0.284-0.647 c0.259-0.104,0.547,0.025,0.648,0.284c1.017,2.602,1.497,5.341,1.426,8.14c-0.011,0.451-0.037,0.901-0.078,1.352 C70.738,52.141,70.52,52.336,70.264,52.336z"></path></g><g><path fill="#472b29" d="M35.107,36.532c-0.123,0-0.245-0.045-0.341-0.135c-0.202-0.188-0.212-0.505-0.024-0.706 c3.399-3.642,7.999-5.94,12.95-6.475c0.277-0.023,0.521,0.17,0.551,0.443c0.03,0.274-0.169,0.521-0.443,0.551 c-4.713,0.509-9.091,2.697-12.327,6.162C35.375,36.479,35.241,36.532,35.107,36.532z"></path></g><g><path fill="#472b29" d="M36.138,65.284c-0.123,0-0.245-0.045-0.341-0.135c-7.104-6.632-8.721-17.138-3.934-25.548 c0.137-0.242,0.442-0.325,0.682-0.188c0.24,0.137,0.324,0.442,0.187,0.682c-4.557,8.006-3.016,18.008,3.748,24.323 c0.202,0.188,0.212,0.505,0.024,0.706C36.405,65.23,36.271,65.284,36.138,65.284z"></path></g><g><path fill="#472b29" d="M58.889,68.769c-0.186,0-0.365-0.104-0.451-0.283c-0.12-0.248-0.016-0.547,0.233-0.667 c2.202-1.062,4.172-2.515,5.856-4.316c0.679-0.729,1.307-1.511,1.866-2.325c0.156-0.227,0.469-0.285,0.695-0.129 c0.228,0.156,0.286,0.467,0.129,0.695c-0.587,0.855-1.246,1.677-1.959,2.44c-1.769,1.894-3.838,3.42-6.152,4.535 C59.036,68.753,58.962,68.769,58.889,68.769z"></path></g><g><path fill="#fff" d="M46.458,73.5v-17h-6.021v-5.978h6.021l0-6.216c-0.137-5.577,4.159-11.002,14.104-7.994l-0.021,5.271 l-3.508-0.022c-2.699,0-3.628,0.863-3.628,2.745v6.216h7.157L59.304,56.5h-5.899v17"></path><path fill="#472b29" d="M53.905,73.5h-1V56h5.993l1.048-4.978h-7.041v-6.716c0-2.244,1.273-3.245,4.128-3.245l3.01,0.019 l0.018-4.394c-4.274-1.22-7.779-0.913-10.154,0.896c-1.942,1.479-3.018,3.926-2.949,6.712v6.729h-6.021V56h6.021v17.5h-1V57h-6.021 v-6.978h6.021v-5.716c-0.076-3.099,1.142-5.845,3.343-7.521c1.888-1.438,5.398-2.768,11.406-0.952l0.357,0.107l-0.024,6.145 l-4.009-0.024c-2.614,0-3.125,0.823-3.125,2.245v5.716h7.273L59.71,57h-5.805V73.5z"></path></g><g><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"></path></g>
                        </svg>
                    </a>
                    <a href='https://www.instagram.com/eagleremlinh/'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 100 100">
                            <circle cx="13" cy="29" r="2" fill="#ee3e54"></circle><circle cx="77" cy="13" r="1" fill="#f1bc19"></circle><circle cx="50" cy="50" r="37" fill="#fce0a2"></circle><circle cx="83" cy="15" r="4" fill="#f1bc19"></circle><circle cx="87" cy="24" r="2" fill="#ee3e54"></circle><circle cx="81" cy="76" r="2" fill="#fbcd59"></circle><circle cx="15" cy="63" r="4" fill="#fbcd59"></circle><circle cx="25" cy="87" r="2" fill="#ee3e54"></circle><circle cx="18.5" cy="53.5" r="2.5" fill="#fff"></circle><circle cx="21" cy="67" r="1" fill="#f1bc19"></circle><circle cx="80" cy="34" r="1" fill="#fff"></circle><path fill="#3231c7" d="M72.3,33.7v32.6c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h32.6 C69.61,27.7,72.3,30.39,72.3,33.7z"></path><path fill="#7228ad" d="M72.3,48.04V66.3c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h18.26 C60.6,32.29,67.71,39.4,72.3,48.04z"></path><path fill="#b11e93" d="M70,71c0,0.01,0,0.01,0,0.02c-1.02,0.8-2.3,1.28-3.7,1.28H33.7c-3.31,0-6-2.69-6-6V33.7 c0-1.4,0.48-2.68,1.28-3.7c0.01,0,0.01,0,0.02,0C51.64,30,70,48.36,70,71z"></path><path fill="#db1a58" d="M62,71c0,0.44-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V38.03C28.13,38.01,28.56,38,29,38 C47.23,38,62,52.77,62,71z"></path><path fill="#e4273e" d="M54,71c0,0.43-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V46.03C28.13,46.01,28.57,46,29,46 C42.81,46,54,57.19,54,71z"></path><path fill="#f47c22" d="M47,71c0,0.44-0.02,0.87-0.05,1.3H33.7c-3.31,0-6-2.69-6-6V53.05C28.13,53.02,28.56,53,29,53 C38.94,53,47,61.06,47,71z"></path><path fill="#ef9922" d="M41,71c0,0.44-0.02,0.87-0.07,1.3H33.7c-3.31,0-6-2.69-6-6v-7.23C28.13,59.02,28.56,59,29,59 C35.63,59,41,64.37,41,71z"></path><path fill="#472b29" d="M66.3,73H33.7c-3.694,0-6.7-3.006-6.7-6.7V33.7c0-3.694,3.006-6.7,6.7-6.7h32.6 c3.694,0,6.7,3.006,6.7,6.7v32.6C73,69.994,69.994,73,66.3,73z M33.7,28.4c-2.923,0-5.3,2.377-5.3,5.3v32.6 c0,2.922,2.377,5.3,5.3,5.3h32.6c2.923,0,5.3-2.377,5.3-5.3V33.7c0-2.922-2.377-5.3-5.3-5.3H33.7z"></path><g><path fill="#fff" d="M49.99,65.45c-3.982,0-5.464-0.011-6.978-0.08c-1.388-0.062-2.469-0.271-3.505-0.677 c-1.006-0.388-1.793-0.899-2.553-1.659c-0.753-0.754-1.265-1.542-1.658-2.553c-0.395-1.007-0.604-2.088-0.677-3.505 c-0.069-1.525-0.08-3.006-0.08-6.977c0-3.964,0.011-5.442,0.08-6.968c0.062-1.388,0.271-2.468,0.676-3.504 c0.394-1.021,0.905-1.808,1.659-2.553c0.754-0.753,1.541-1.265,2.554-1.659c1.035-0.405,2.116-0.613,3.504-0.677 c1.565-0.07,3.065-0.09,6.978-0.09c3.914,0,5.411,0.02,6.967,0.09c1.388,0.063,2.469,0.271,3.506,0.677 c1.021,0.394,1.807,0.905,2.552,1.659c0.747,0.738,1.262,1.524,1.669,2.553c0.397,1.046,0.604,2.128,0.667,3.504 c0.07,1.58,0.09,3.078,0.09,6.967c0,3.897-0.02,5.397-0.09,6.978c-0.063,1.377-0.269,2.458-0.667,3.505 c-0.407,1.018-0.923,1.806-1.669,2.552c-0.743,0.752-1.527,1.264-2.543,1.659c-1.049,0.405-2.133,0.614-3.515,0.676 C55.443,65.439,53.964,65.45,49.99,65.45z M48.68,37.45c-2.752,0-4.263,0.021-5.575,0.079c-1.342,0.062-2.082,0.287-2.577,0.476 c-0.617,0.242-1.059,0.53-1.525,0.998c-0.467,0.466-0.755,0.905-0.993,1.516c-0.191,0.498-0.417,1.24-0.479,2.585 c-0.068,1.506-0.079,2.895-0.079,6.887c0,4,0.011,5.39,0.079,6.895c0.062,1.336,0.287,2.076,0.477,2.572 c0.239,0.619,0.526,1.061,0.99,1.525c0.473,0.465,0.916,0.752,1.53,0.994c0.479,0.188,1.204,0.411,2.576,0.475 c1.56,0.07,3.04,0.089,6.888,0.089c3.856,0,5.338-0.019,6.895-0.089c1.405-0.065,2.147-0.303,2.583-0.477 c0.604-0.234,1.044-0.518,1.514-0.978c0.466-0.476,0.755-0.919,1.001-1.534c0.186-0.487,0.405-1.217,0.469-2.575 c0.069-1.573,0.089-3.055,0.089-6.897c0-3.835-0.02-5.315-0.089-6.886c-0.063-1.356-0.282-2.086-0.467-2.57 c-0.239-0.62-0.525-1.061-0.99-1.525c-0.498-0.49-0.903-0.75-1.548-0.997c-0.464-0.185-1.178-0.408-2.56-0.473 c-1.535-0.07-3.018-0.089-6.896-0.089H48.68z"></path><path fill="#472b29" d="M49.99,34.8c3.909,0,5.405,0.019,6.956,0.09c1.359,0.061,2.415,0.265,3.428,0.66 c0.985,0.38,1.744,0.873,2.467,1.605c0.719,0.71,1.216,1.47,1.608,2.459c0.389,1.024,0.59,2.081,0.652,3.429 c0.07,1.576,0.089,3.072,0.089,6.957c0,3.893-0.019,5.39-0.089,6.966c-0.062,1.35-0.263,2.407-0.648,3.42 c-0.396,0.989-0.894,1.751-1.617,2.474c-0.716,0.725-1.473,1.219-2.453,1.6c-1.023,0.395-2.083,0.599-3.436,0.66 c-1.509,0.069-2.986,0.08-6.956,0.08c-3.978,0-5.458-0.011-6.967-0.08c-1.359-0.061-2.415-0.264-3.426-0.66 c-0.971-0.375-1.731-0.869-2.465-1.602c-0.728-0.729-1.222-1.489-1.603-2.468c-0.384-0.981-0.587-2.038-0.659-3.423 c-0.069-1.522-0.08-3.001-0.08-6.968c0-3.959,0.011-5.436,0.08-6.957c0.061-1.359,0.264-2.415,0.66-3.427 c0.38-0.985,0.873-1.745,1.603-2.465c0.727-0.727,1.488-1.221,2.467-1.602c1.009-0.394,2.065-0.598,3.424-0.66 C44.585,34.819,46.082,34.8,49.99,34.8 M49.99,62.79c3.861,0,5.345-0.019,6.907-0.089c1.443-0.067,2.211-0.314,2.658-0.493 c0.641-0.248,1.105-0.547,1.609-1.041c0.487-0.497,0.791-0.964,1.053-1.62c0.191-0.501,0.419-1.255,0.483-2.649 c0.07-1.576,0.089-3.061,0.089-6.908c0-3.839-0.019-5.322-0.089-6.898c-0.065-1.391-0.292-2.145-0.483-2.65 c-0.249-0.645-0.562-1.126-1.049-1.614c-0.518-0.509-0.96-0.794-1.625-1.048c-0.486-0.194-1.225-0.425-2.645-0.492 c-1.539-0.07-3.024-0.089-6.907-0.089H48.68c-2.756,0-4.27,0.021-5.588,0.079c-1.376,0.064-2.141,0.296-2.658,0.493 c-0.641,0.251-1.122,0.566-1.609,1.053c-0.487,0.486-0.801,0.965-1.051,1.605c-0.197,0.513-0.431,1.28-0.495,2.662 c-0.069,1.511-0.08,2.901-0.08,6.898c0,4.004,0.01,5.397,0.08,6.907c0.064,1.372,0.297,2.136,0.493,2.65 c0.252,0.654,0.556,1.121,1.05,1.615c0.491,0.482,0.973,0.795,1.613,1.046c0.496,0.194,1.247,0.426,2.656,0.492 C44.655,62.771,46.138,62.79,49.99,62.79 M49.99,34.3c-3.991,0-5.454,0.021-6.989,0.09c-1.417,0.064-2.522,0.279-3.583,0.693 c-1.047,0.408-1.86,0.937-2.639,1.714c-0.78,0.771-1.31,1.585-1.716,2.639c-0.416,1.062-0.63,2.168-0.693,3.584 c-0.069,1.537-0.08,3.019-0.08,6.979c0,3.969,0.011,5.452,0.08,6.99c0.075,1.444,0.289,2.549,0.693,3.583 c0.407,1.045,0.937,1.859,1.715,2.639c0.786,0.786,1.601,1.314,2.639,1.715c1.062,0.416,2.168,0.63,3.584,0.693 c1.537,0.07,3.02,0.081,6.989,0.081c3.96,0,5.441-0.01,6.979-0.081c1.41-0.063,2.519-0.277,3.594-0.693 c1.051-0.409,1.861-0.938,2.629-1.715c0.771-0.771,1.303-1.583,1.726-2.64c0.409-1.075,0.619-2.18,0.684-3.583 c0.068-1.536,0.09-3,0.09-6.989c0-3.979-0.021-5.443-0.09-6.979c-0.064-1.402-0.274-2.506-0.685-3.585 c-0.421-1.062-0.953-1.876-1.724-2.637c-0.771-0.78-1.584-1.309-2.639-1.716c-1.063-0.416-2.169-0.629-3.585-0.693 C55.443,34.321,53.982,34.3,49.99,34.3L49.99,34.3z M49.99,62.29c-3.842,0-5.32-0.019-6.876-0.089 c-1.336-0.062-2.036-0.278-2.496-0.458c-0.582-0.229-1-0.5-1.445-0.938c-0.441-0.441-0.705-0.846-0.934-1.438 c-0.182-0.476-0.399-1.195-0.46-2.494c-0.068-1.492-0.079-2.881-0.079-6.884c0-3.995,0.011-5.382,0.079-6.875 c0.061-1.308,0.278-2.026,0.462-2.506c0.225-0.574,0.497-0.99,0.938-1.43c0.44-0.441,0.856-0.713,1.438-0.941 c0.473-0.18,1.192-0.399,2.499-0.459C44.42,37.722,45.93,37.7,48.68,37.7h1.311c3.876,0,5.355,0.019,6.885,0.088 c1.346,0.063,2.033,0.277,2.482,0.457c0.612,0.234,0.99,0.478,1.46,0.94c0.436,0.436,0.708,0.854,0.934,1.438 c0.176,0.463,0.389,1.17,0.45,2.493c0.069,1.557,0.089,3.036,0.089,6.875c0,3.847-0.02,5.328-0.089,6.886 c-0.062,1.322-0.273,2.027-0.451,2.494c-0.234,0.586-0.501,0.996-0.943,1.448c-0.445,0.437-0.851,0.7-1.432,0.924 c-0.424,0.169-1.13,0.396-2.501,0.459C55.32,62.271,53.84,62.29,49.99,62.29L49.99,62.29z"></path></g><path fill="#fff" d="M58.5,43.25c-0.965,0-1.75-0.785-1.75-1.75s0.785-1.75,1.75-1.75h0.001 c0.467,0,0.906,0.182,1.236,0.512c0.331,0.331,0.513,0.77,0.513,1.237C60.25,42.465,59.465,43.25,58.5,43.25z"></path><path fill="#472b29" d="M58.5,40c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5S57,42.328,57,41.5 C57,40.672,57.672,40.001,58.5,40L58.5,40 M58.5,39.5L58.5,39.5c-1.103,0.001-2,0.898-2,2c0,1.103,0.897,2,2,2s2-0.897,2-2 S59.603,39.5,58.5,39.5L58.5,39.5z"></path><path fill="#fff" d="M49.988,41.504c-4.695,0-8.501,3.806-8.501,8.501s3.806,8.499,8.501,8.499 c4.695,0,8.499-3.805,8.499-8.499S54.682,41.504,49.988,41.504L49.988,41.504z M49.988,44.505c3.037,0,5.5,2.462,5.5,5.5 c0,3.037-2.463,5.5-5.5,5.5c-3.038,0-5.5-2.463-5.5-5.5C44.488,46.967,46.95,44.505,49.988,44.505z"></path><path fill="#472b29" d="M49.988,58.754c-4.825,0-8.751-3.925-8.751-8.75c0-4.825,3.926-8.75,8.751-8.75 c4.824,0,8.749,3.925,8.749,8.75C58.737,54.829,54.812,58.754,49.988,58.754z M49.988,41.754c-4.55,0-8.251,3.701-8.251,8.25 c0,4.549,3.701,8.25,8.251,8.25c4.549,0,8.249-3.701,8.249-8.25C58.237,45.455,54.537,41.754,49.988,41.754z M49.988,55.754 c-3.171,0-5.75-2.58-5.75-5.75s2.579-5.75,5.75-5.75s5.75,2.58,5.75,5.75S53.159,55.754,49.988,55.754z M49.988,44.754 c-2.895,0-5.25,2.355-5.25,5.25s2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25S52.883,44.754,49.988,44.754z"></path>
                        </svg>
                    </a>
                    <a href='https://www.tiktok.com/@thuytuythienkhu'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 100 100">
                            <circle cx="13" cy="29" r="2" fill="#ee3e54"></circle><circle cx="77" cy="13" r="1" fill="#f1bc19"></circle><circle cx="50" cy="50" r="37" fill="#fce0a2"></circle><circle cx="83" cy="15" r="4" fill="#f1bc19"></circle><circle cx="87" cy="24" r="2" fill="#ee3e54"></circle><circle cx="81" cy="76" r="2" fill="#fbcd59"></circle><circle cx="15" cy="63" r="4" fill="#fbcd59"></circle><circle cx="25" cy="87" r="2" fill="#ee3e54"></circle><circle cx="18.5" cy="53.5" r="2.5" fill="#fff"></circle><circle cx="21" cy="67" r="1" fill="#f1bc19"></circle><circle cx="80" cy="34" r="1" fill="#fff"></circle><g><path fill="#472b29" d="M36.437,72.3c-4.817,0-8.737-3.92-8.737-8.737V36.438c0-4.817,3.92-8.737,8.737-8.737h27.125 c4.817,0,8.737,3.92,8.737,8.737v27.125c0,4.817-3.92,8.737-8.737,8.737H36.437z"></path><path fill="#472b29" d="M63.562,28.4c4.432,0,8.037,3.606,8.037,8.037v27.125c0,4.432-3.606,8.037-8.037,8.037H36.437 c-4.432,0-8.037-3.606-8.037-8.037V36.438c0-4.432,3.606-8.037,8.037-8.037H63.562 M63.562,27H36.437 C31.247,27,27,31.247,27,36.438v27.125C27,68.753,31.247,73,36.437,73h27.125C68.753,73,73,68.753,73,63.563V36.438 C73,31.247,68.753,27,63.562,27L63.562,27z"></path></g><g><path fill="#ee3e54" d="M66,43c0,0-7,0-8-8h-6v14.024V56l-0.05,3c-0.252,2.247-2.136,4-4.45,4c-2.485,0-4.5-2.015-4.5-4.5 s2.015-4.5,4.5-4.5c0.171,0,0.334,0.032,0.5,0.05v-6.025C47.833,48.017,47.669,48,47.5,48C41.701,48,37,52.701,37,58.5 C37,64.299,41.701,69,47.5,69c5.63,0,10.212-4.435,10.475-10H58V46.24c1.98,1.623,4.584,2.76,8,2.76C66,47,66,43,66,43z"></path></g><g><path fill="#472b29" d="M58,57c-0.138,0-0.25-0.112-0.25-0.25v-8.625c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25 v8.625C58.25,56.888,58.138,57,58,57z"></path></g><g><path fill="#472b29" d="M47.5,69.25c-0.799,0-1.595-0.088-2.366-0.261c-0.135-0.03-0.22-0.164-0.189-0.299 c0.03-0.134,0.159-0.221,0.299-0.189c1.468,0.329,3.038,0.331,4.5,0.002c0.324-0.071,0.647-0.16,0.963-0.265 c0.398-0.132,0.788-0.288,1.157-0.463c3.438-1.624,5.683-4.991,5.861-8.787c0.007-0.134,0.116-0.238,0.25-0.238 c0.138,0,0.263,0.112,0.263,0.25c0,0.034-0.006,0.066-0.018,0.097c-0.216,3.946-2.563,7.439-6.143,9.13 c-0.388,0.185-0.796,0.348-1.215,0.486c-0.331,0.109-0.671,0.203-1.011,0.278C49.087,69.163,48.296,69.25,47.5,69.25z"></path></g><g><path fill="#472b29" d="M43.354,56.998c-0.032,0-0.065-0.006-0.098-0.02c-0.127-0.054-0.187-0.201-0.133-0.328 c0.746-1.762,2.464-2.9,4.377-2.9c0.085,0,0.168,0.007,0.25,0.017v-5.741c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25v6.025 c0,0.071-0.03,0.139-0.083,0.187c-0.054,0.047-0.124,0.067-0.194,0.062l-0.154-0.02c-0.104-0.014-0.21-0.029-0.318-0.029 c-1.712,0-3.249,1.019-3.916,2.596C43.543,56.94,43.451,56.998,43.354,56.998z"></path></g><g><path fill="#472b29" d="M66,49.25c-1.45,0-2.831-0.205-4.106-0.609c-0.132-0.042-0.205-0.183-0.163-0.313 c0.042-0.132,0.187-0.205,0.313-0.163c1.153,0.365,2.399,0.562,3.706,0.584V43.24c-0.66-0.044-2.505-0.277-4.288-1.503 c-0.114-0.078-0.143-0.234-0.064-0.348c0.079-0.113,0.236-0.141,0.348-0.064c2.048,1.408,4.233,1.425,4.255,1.425 c0.138,0,0.25,0.112,0.25,0.25v6C66.25,49.138,66.138,49.25,66,49.25z"></path></g><g><path fill="#fff" d="M45.5,67.5c-6.065,0-11-4.935-11-11s4.935-11,11-11c0.12,0,0.237,0.008,0.355,0.016l0.168,0.011 c0.267,0.012,0.477,0.232,0.477,0.499v6.025c0,0.143-0.061,0.277-0.167,0.373c-0.092,0.082-0.211,0.127-0.333,0.127 c-0.019,0-0.216-0.023-0.216-0.023C45.69,52.515,45.597,52.5,45.5,52.5c-2.206,0-4,1.794-4,4s1.794,4,4,4 c2.026,0,3.726-1.528,3.952-3.556l0.048-2.953V33c0-0.276,0.224-0.5,0.5-0.5h6c0.252,0,0.465,0.188,0.496,0.438 c0.932,7.45,7.237,7.562,7.505,7.563c0.275,0.001,0.499,0.225,0.499,0.5v6c0,0.276-0.224,0.5-0.5,0.5 c-2.828,0-5.346-0.758-7.5-2.255V57c0,0.064-0.013,0.126-0.034,0.184C56.109,62.981,51.323,67.5,45.5,67.5z"></path><path fill="#472b29" d="M56,33c1,8,8,8,8,8s0,4,0,6c-3.416,0-6.02-1.136-8-2.76V57h-0.025C55.712,62.565,51.13,67,45.5,67 C39.701,67,35,62.299,35,56.5C35,50.701,39.701,46,45.5,46c0.169,0,0.333,0.017,0.5,0.025v6.025C45.834,52.032,45.671,52,45.5,52 c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5c2.314,0,4.198-1.753,4.45-4L50,54v-6.976V33H56 M56,32h-6c-0.552,0-1,0.448-1,1 v14.024V54l-0.049,2.933C48.732,58.685,47.257,60,45.5,60c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5 c0.075,0,0.147,0.013,0.219,0.023l0.169,0.022c0.037,0.004,0.074,0.006,0.111,0.006c0.245,0,0.482-0.09,0.667-0.255 C46.879,52.606,47,52.335,47,52.05v-6.025c0-0.534-0.419-0.974-0.953-0.999l-0.156-0.01C45.761,45.008,45.632,45,45.5,45 C39.159,45,34,50.159,34,56.5S39.159,68,45.5,68c6.069,0,11.06-4.695,11.461-10.729C56.986,57.185,57,57.094,57,57V46.161 C59.057,47.382,61.403,48,64,48c0.552,0,1-0.448,1-1v-6c0-0.552-0.448-1-1-1c-0.246-0.002-6.134-0.131-7.008-7.124 C56.93,32.376,56.504,32,56,32L56,32z"></path></g><g><path fill="#83ccb7" d="M64,41.892C64,41.352,64,41,64,41s-2.649-0.007-4.921-1.871C60.687,41.039,62.78,41.683,64,41.892z"></path><path fill="#83ccb7" d="M42.866,60.134C43.684,61.26,45.002,62,46.5,62c2.314,0,4.198-1.753,4.45-4L51,55v-6.976V34h5.181 c-0.067-0.324-0.136-0.645-0.181-1h-6v14.024V54l-0.05,3c-0.252,2.247-2.136,4-4.45,4C44.513,61,43.608,60.673,42.866,60.134z"></path><path fill="#83ccb7" d="M36,57.5c0-5.63,4.435-10.212,10-10.475v-1C45.833,46.017,45.669,46,45.5,46 C39.701,46,35,50.701,35,56.5c0,3.154,1.398,5.976,3.599,7.901C36.985,62.555,36,60.145,36,57.5z"></path></g><g><path fill="#472b29" d="M51,46.25c-0.138,0-0.25-0.112-0.25-0.25V34c0-0.138,0.112-0.25,0.25-0.25h5.181 c0.138,0,0.25,0.112,0.25,0.25s-0.112,0.25-0.25,0.25H51.25V46C51.25,46.138,51.138,46.25,51,46.25z"></path><path fill="#472b29" d="M51,55.25c-0.138,0-0.25-0.112-0.25-0.25v-6.976c0-0.138,0.112-0.25,0.25-0.25 s0.25,0.112,0.25,0.25V55C51.25,55.138,51.138,55.25,51,55.25z"></path><path fill="#472b29" d="M46.5,62.25c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25c2.154,0,3.96-1.624,4.201-3.777 l0.022-1.436c0.002-0.137,0.114-0.246,0.25-0.246c0.001,0,0.003,0,0.004,0c0.139,0.002,0.248,0.116,0.246,0.254l-0.024,1.459 C50.929,60.435,48.909,62.25,46.5,62.25z"></path><path fill="#472b29" d="M42.367,48.107c-0.097,0-0.189-0.057-0.229-0.151c-0.055-0.127,0.004-0.274,0.131-0.328 c1.181-0.505,2.432-0.792,3.72-0.853c0.121,0.013,0.255,0.101,0.262,0.238c0.006,0.138-0.101,0.255-0.238,0.262 c-1.228,0.058-2.421,0.331-3.546,0.812C42.434,48.101,42.4,48.107,42.367,48.107z"></path><path fill="#472b29" d="M36,57.75c-0.138,0-0.25-0.112-0.25-0.25c0-3.713,1.881-7.112,5.03-9.093 c0.116-0.07,0.271-0.039,0.345,0.079c0.073,0.116,0.038,0.271-0.079,0.345c-3.003,1.888-4.796,5.129-4.796,8.669 C36.25,57.638,36.138,57.75,36,57.75z"></path></g>
                        </svg>
                    </a>
                    <a href='https://github.com/TruongHoaiLinh3103'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 100 100">
                            <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"></path><g><path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"></path><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"></path></g><g><path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z"></path></g><g><path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z"></path></g><g><path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z"></path></g><g><path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z"></path><path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z"></path></g><g><path fill="#fefdef" d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93"></path><path fill="#472b29" d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z"></path></g><g><path fill="#fefdef" d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342"></path><path fill="#472b29" d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z"></path></g><g><path fill="#fefdef" d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055"></path><path fill="#472b29" d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z"></path></g>
                        </svg>
                    </a>
                    <a href='https://www.pinterest.com/Anikey3103/'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 100 100">
                            <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"></path><g><path fill="#f37e98" d="M35,72.3c-4.025,0-7.3-3.274-7.3-7.3V35c0-4.025,3.274-7.3,7.3-7.3h30c4.025,0,7.3,3.274,7.3,7.3 v30c0,4.025-3.274,7.3-7.3,7.3H35z"></path><path fill="#472b29" d="M65,28.4c3.639,0,6.6,2.961,6.6,6.6v30c0,3.639-2.961,6.6-6.6,6.6H35c-3.639,0-6.6-2.961-6.6-6.6 V35c0-3.639,2.961-6.6,6.6-6.6H65 M65,27H35c-4.4,0-8,3.6-8,8v30c0,4.4,3.6,8,8,8h30c4.4,0,8-3.6,8-8V35C73,30.6,69.4,27,65,27 L65,27z"></path></g><g><path fill="#fff" d="M63.542,69H36.458C33.456,69,31,66.544,31,63.542V36.458C31,33.456,33.456,31,36.458,31h27.083 C66.544,31,69,33.456,69,36.458v27.083C69,66.544,66.544,69,63.542,69z"></path></g><g><path fill="#472b29" d="M68.5,47.375c-0.276,0-0.5-0.224-0.5-0.5V43c0-0.276,0.224-0.5,0.5-0.5S69,42.724,69,43v3.875 C69,47.151,68.776,47.375,68.5,47.375z"></path></g><g><path fill="#472b29" d="M68.5,40.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5S69,37.724,69,38v2 C69,40.276,68.776,40.5,68.5,40.5z"></path></g><g><path fill="#472b29" d="M64,69H36c-2.757,0-5-2.243-5-5V36c0-2.757,2.243-5,5-5h25.375c0.276,0,0.5,0.224,0.5,0.5 s-0.224,0.5-0.5,0.5H36c-2.206,0-4,1.794-4,4v28c0,2.206,1.794,4,4,4h28c2.206,0,4-1.794,4-4V49.625c0-0.276,0.224-0.5,0.5-0.5 s0.5,0.224,0.5,0.5V64C69,66.757,66.757,69,64,69z"></path></g><g><path fill="#f15b6c" d="M50.607,40.417c-5.558,0-8.515,3.578-8.515,7.477c0,1.809,1.006,4.065,2.618,4.781 c0.244,0.11,0.377,0.063,0.432-0.165c0.047-0.173,0.259-1.006,0.362-1.4c0.032-0.125,0.015-0.235-0.087-0.354 c-0.534-0.621-0.959-1.754-0.959-2.815c0-2.72,2.154-5.362,5.818-5.362c3.169,0,5.386,2.068,5.386,5.024 c0,3.341-1.761,5.653-4.05,5.653c-1.266,0-2.209-0.998-1.911-2.233c0.362-1.47,1.07-3.05,1.07-4.112 c0-0.951-0.534-1.737-1.627-1.737c-1.29,0-2.335,1.282-2.335,3.004c0,1.093,0.385,1.832,0.385,1.832s-1.273,5.173-1.51,6.141 c-0.401,1.635,0.055,4.285,0.095,4.513c0.023,0.125,0.165,0.165,0.244,0.063c0.125-0.165,1.667-2.374,2.099-3.97 c0.157-0.582,0.802-2.94,0.802-2.94c0.424,0.771,1.651,1.415,2.957,1.415c3.884,0,6.691-3.428,6.691-7.681 C58.556,43.467,55.081,40.417,50.607,40.417"></path><path fill="#472b29" d="M45.917,61.286c-0.049,0-0.098-0.006-0.147-0.018c-0.244-0.058-0.433-0.259-0.479-0.512 c-0.088-0.5-0.5-3.052-0.089-4.725c0.211-0.863,1.249-5.08,1.469-5.975c-0.128-0.311-0.359-0.993-0.359-1.879 c0-1.965,1.245-3.504,2.834-3.504c1.272,0,2.127,0.899,2.127,2.237c0,0.753-0.297,1.671-0.611,2.644 c-0.169,0.523-0.344,1.063-0.473,1.587c-0.097,0.402-0.024,0.775,0.213,1.076c0.269,0.342,0.711,0.538,1.212,0.538 c2.057,0,3.549-2.167,3.549-5.153c0-2.664-2.009-4.524-4.886-4.524c-3.455,0-5.319,2.505-5.319,4.861 c0,0.994,0.422,2.005,0.838,2.489c0.2,0.231,0.267,0.51,0.193,0.803l-0.365,1.407c-0.073,0.305-0.253,0.453-0.391,0.521 c-0.21,0.104-0.455,0.093-0.728-0.029c-1.823-0.81-2.914-3.299-2.914-5.237c0-3.842,2.821-7.977,9.015-7.977 c4.807,0,8.447,3.281,8.467,7.633c0,4.666-3.091,8.183-7.191,8.183c-1.013,0-2.022-0.352-2.716-0.899 c-0.2,0.732-0.467,1.708-0.56,2.055c-0.478,1.764-2.167,4.121-2.184,4.143C46.296,61.195,46.111,61.286,45.917,61.286z M49.146,45.675c-1.029,0-1.834,1.1-1.834,2.504c0,0.944,0.327,1.597,0.33,1.604c0.055,0.106,0.07,0.231,0.041,0.348 c0,0-1.273,5.173-1.509,6.14c-0.246,1.003-0.143,2.449-0.031,3.391c0.51-0.802,1.236-2.06,1.5-3.033 c0.156-0.582,0.802-2.941,0.802-2.941c0.054-0.196,0.221-0.341,0.424-0.364c0.204-0.021,0.399,0.076,0.497,0.255 c0.313,0.568,1.34,1.156,2.519,1.156c3.529,0,6.191-3.087,6.191-7.181c-0.017-3.781-3.227-6.635-7.467-6.635 c-5.507,0-8.015,3.616-8.015,6.977c0,1.514,0.811,3.502,2.133,4.231l0.28-1.082c-0.629-0.76-1.047-1.996-1.047-3.103 c0-2.842,2.215-5.861,6.319-5.861c3.465,0,5.886,2.271,5.886,5.524c0,3.565-1.913,6.153-4.549,6.153 c-0.81,0-1.538-0.335-1.999-0.92c-0.427-0.542-0.568-1.229-0.398-1.931c0.135-0.55,0.316-1.112,0.493-1.658 c0.29-0.896,0.563-1.74,0.563-2.336C50.272,46.54,50.163,45.675,49.146,45.675z"></path></g>
                        </svg>
                    </a>
                    <a href='https://truonghoailinh.vercel.app/'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 100 100">
                            <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"></path><path fill="#fefdef" d="M37.296,73.3c-2.535,0-4.596-2.065-4.596-4.605V31.306c0-2.54,2.062-4.605,4.596-4.605h19.132 L68.3,38.593l0,30.102c0,2.54-2.062,4.605-4.596,4.605H37.296z"></path><path fill="#472b29" d="M56.138,27.4l4.662,4.67l6.799,6.812v29.813c0,2.154-1.748,3.906-3.896,3.906H37.296 c-2.149,0-3.896-1.752-3.896-3.906V31.306c0-2.154,1.748-3.906,3.896-3.906h0.769h1.718h5.523H56.138 M56.719,26H45.307h-5.523 h-1.718h-0.769C34.383,26,32,28.388,32,31.306v37.389C32,71.613,34.384,74,37.296,74h26.406c2.913,0,5.296-2.388,5.296-5.306 V38.303H69C64.224,33.518,61.495,30.785,56.719,26L56.719,26z"></path><path fill="#fef6aa" d="M56.5,27v6.483c0,2.759,2.214,5.017,4.921,5.017H68"></path><path fill="#472b29" d="M68 39h-6.579C58.432 39 56 36.525 56 33.483V27h1v6.483C57 35.974 58.983 38 61.421 38H68V39zM63 71H38c-1.654 0-3-1.346-3-3V32c0-1.654 1.346-3 3-3h2c.276 0 .5.224.5.5S40.276 30 40 30h-2c-1.103 0-2 .897-2 2v36c0 1.103.897 2 2 2h25c1.103 0 2-.897 2-2V52.917c0-.276.224-.5.5-.5s.5.224.5.5V68C66 69.654 64.654 71 63 71zM65.5 51c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4C66 50.776 65.776 51 65.5 51zM65.5 44.75c-.276 0-.5-.224-.5-.5v-2.583c0-.276.224-.5.5-.5s.5.224.5.5v2.583C66 44.526 65.776 44.75 65.5 44.75z"></path><path fill="#472b29" d="M49.5,43.75h-10c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h10 c0.138,0,0.25,0.112,0.25,0.25S49.638,43.75,49.5,43.75z"></path><g><path fill="#472b29" d="M49.5,47.75h-10c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h10 c0.138,0,0.25,0.112,0.25,0.25S49.638,47.75,49.5,47.75z"></path></g><g><path fill="#472b29" d="M49.5,51.75h-10c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h10 c0.138,0,0.25,0.112,0.25,0.25S49.638,51.75,49.5,51.75z"></path></g><g><path fill="#472b29" d="M46.5,55.75h-7c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h7c0.138,0,0.25,0.112,0.25,0.25 S46.638,55.75,46.5,55.75z"></path></g><g><path fill="#472b29" d="M49.5,59.75h-10c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h10 c0.138,0,0.25,0.112,0.25,0.25S49.638,59.75,49.5,59.75z"></path></g><g><path fill="#472b29" d="M51.5,63.75h-12c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h12 c0.138,0,0.25,0.112,0.25,0.25S51.638,63.75,51.5,63.75z"></path></g><g><path fill="#472b29" d="M61.5,63.75h-8c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h8c0.138,0,0.25,0.112,0.25,0.25 S61.638,63.75,61.5,63.75z"></path></g><g><path fill="#472b29" d="M61.5,55.75h-13c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h13 c0.138,0,0.25,0.112,0.25,0.25S61.638,55.75,61.5,55.75z"></path></g><g><path fill="#472b29" d="M61.5,59.75h-4c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h4c0.138,0,0.25,0.112,0.25,0.25 S61.638,59.75,61.5,59.75z"></path></g><g><path fill="#472b29" d="M55.5,59.75h-4c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h4c0.138,0,0.25,0.112,0.25,0.25 S55.638,59.75,55.5,59.75z"></path></g><g><path fill="#fef6aa" d="M52.5 53L52.5 43.5 61.5 43.5 61.5 52.5 56 52.5"></path><path fill="#472b29" d="M52.75 53L52.25 53 52.25 43.25 61.75 43.25 61.75 52.75 56 52.75 56 52.25 61.25 52.25 61.25 43.75 52.75 43.75z"></path></g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;