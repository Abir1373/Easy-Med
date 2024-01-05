import image from '../../assets/Navicon.svg'
export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <a className="btn btn-ghost text-xl"><img src={image} alt="" /> Easy-Med</a>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
            </aside>
            <nav>
                <header className="footer-title">Quick Links</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Doctors</a>
                <a className="link link-hover">Departments</a>
                <a className="link link-hover">Online Payments</a>
                <a className="link link-hover">Contact us</a>
            </nav>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Pediatric Clinic</a>
                <a className="link link-hover">Diagnosis Clinic</a>
                <a className="link link-hover">Cardiac Clinic</a>
                <a className="link link-hover">Laboratory Analysis</a>
                <a className="link link-hover">Gynecological Clinic</a>
                <a className="link link-hover">Personal Counseling</a>
                <a className="link link-hover">Dental Clinic</a>
            </nav>
            <nav>
                <header className="footer-title">Working hours</header>
                <a className="link link-hover">Monday - 10 am to 7 pm</a>
                <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                <a className="link link-hover">Friday - 10 am to 7 pm</a>
                <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                <a className="link link-hover">Sunday - 10 am to 7 pm</a>
            </nav>
        </footer>
    )
}
