import './footer.css'
function Footer()
{
    const date=new Date().getFullYear()
return(<footer>
    <div className="footer">
        <center><p>&copy;Copyright {date} FLyHigh. All rights reserved</p></center>
    </div>
</footer>)
}
export default Footer;