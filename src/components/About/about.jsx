import './about.css'
import Image from '../../assets/aboutimage2.svg'
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";


function About (){
    const {t} = useTranslation()
    return(
        <>
            <Helmet>
                <title> {t('about')} </title>
            </Helmet>
            <div style={{maxWidth: '1392px', margin: 'auto'}}>
                <div className='About-Title'>
                    <h1 className='about-title'>Rəhbərin müraciəti</h1>
                    <p className='about-text'>Mərkəzin rəhbəri Tibb Elmləri Doktoru</p>
                    <h2 className='Name-title'>Rəşad Şolan</h2>
                </div>
       
                <div className='about'>
                    
                    <div className='aboutcircle'>
                        <img src={Image} alt="Image" className='AboutImage' />

                    </div>

                   

                    <div className='AboutText2'>
                        <p className='aboutText2'>Rəşad Fərhad oğlu Şolan (Məmmədov Rəşad Fərhad oğlu; 27 iyun 1980,
                            İmişli rayonu ) —
                            cərrah-uroloq, transplantoloq, Amerika Uroloqlar Assosiasiyasının və Avropa Uroloqlar
                            Assosiasiyasının araşdırmaçı üzvü, “Böyrək Transplantasiyası üzrə Mütəxəssislər
                            Assosiasiyası”nın İdarə Heyətinin sədri, Azərbaycan Respublikası Səhiyyə Nazirliyinin böyrək
                            transplantasiyası üzrə baş mütəxəssisi (2019–2021), Azərbaycan Respublikası Səhiyyə
                            Nazirliyinin orqan transplantasiyası üzrə mütəxəssis eksperti, Respublika Diaqnostika
                            Mərkəzinin “Böyrək xəstəlikləri və transplantologiya” şöbəsinin müdiri (2017–2023), AMEA A.
                            Qarayev adına Fiziologiya İnstitutunun “İmmunofiziologiya və eksperimental
                            transplantologiya”
                            laboratoriyasının müdiri, Dövlət Təhlükəsizliyi Xidməti, Hərbi-Tibb Baş İdarəsi, Elmi
                            Təcrübə
                            Mərkəzinin rəsi, eyni zamanda DTX HTBİ Hərbi Hospitalının “Böyrək Xəstəlikləri və Orqan
                            Transplantasiyası” şöbəsinin rəhbəri, tibb üzrə fəlsəfə doktoru.</p>
                    </div>


                </div>

                <div className='abouttext3'>
                    <p>
                        Rəşad Şolan 27 iyun 1980-ci ildə Azərbaycan SSR-in İmişli şəhərində ziyalı ailəsində dünyaya göz
                        açmışdır. 1987–1993-cü illərdə Bakı şəhəri 264 saylı orta məktəbdə təhsil almış, 1993-cü ildə
                        isə müsabiqə yolu ilə akademik Azad Mirzəcanzadənin fəxri rəhbərliyi altında Həbibbəy
                        Mahmudbəyov adına Texniki-Humanitar Litseyə qəbul olunmuşdur. 1997-ci ildə təhsilini başa
                        çatdırmış, elə həmin ildə Azərbaycan Tibb Universitetinin birinci müalicə-profilaktika
                        fakültəsinə daxil olmuşdur. 2000-ci ildə “Xroniki pielonefrit və qlomerulonefrit xəstələrində
                        sidiyin mikroflorasının öyrənilməsi” mövzusunda ilk elmi-araşdırma işini aparmış və müəllifi
                        olduğu elmi iş Tələbə Elmi Cəmiyyətinin (TEC) konqres materiallarında çap olunmuşdur. 2002- ci
                        ildə birinci müalicə-profilaktika fakültəsinin Tələbə Elmi Cəmiyyətinin sədri seçilmişdir.
                        2003-cü ildə “İvanisseviçin əməliyyatı zamanı mini-çıxışdan istifadə” mövzusunda tələbə elmi işi
                        ilin ən yaxşı tələbə işi nominasiyasına layiq görülmüşdür. 2003-cü ildə Azərbaycan Tibb
                        Universitetini fərqlənmə diplomu ilə bitirmişdir. Elə həmin il Türkiyə Cümhuriyyətinin Ege
                        Universitetinin ”Urologiya” kafedrasında urologiya üzrə rezidenturaya qəbul olunmuşdur.
                        2003–2009-cu illərdə Ege Universitetinin “Urologiya” kafedrasının assistenti olmuşdur. Bu
                        illərdə uroloji cərrahiyyənin bütün istiqamətləri — uroonkologiya, endourologiya, andrologiya,
                        funksional urologiya, laparoskopik urologiya üzrə təkmilləşmişdir. Elə həmin illərdə onun
                        kafedranın əməkdaşları ilə həmmüəllifi olduğu bir sıra elmi məqalələri Türkiyə, ABŞ, Braziliya ,
                        Yaponiya və digər ölkələrdə çap edilmişdir. <br/>

                        Rəşad Şolan Ege Universitetindəki fəaliyyəti dövründə 802 əməliyyat həyata keçirmişdir.
                        2008–2009-cu illərdə tibb fakültəsi yanında Ege Universitetinin əcnəbi həkim və tələbələrinin
                        nümayəndəliyinə rəhbərlik etmişdir. 2009-cu ildə “Testesteronun çanaq dibi əzələlərinə təsiri və
                        təcrübədə stress tip sidik qaçırma zamanı urodinamik göstəricilər” mövzusunda dissertasiyanı
                        müdafiə etmiş, daha sonra bu müdafiə işi Türkiyə Kontinensiya Cəmiyyətinin mükafatına layiq
                        görülmüşdür. Rəşad Şolan 2009-cu ildə Türkiyədə təhsilini həkim-uroloq ixtisası üzrə başa
                        vuraraq Azərbaycanca dönmüşdür. Azərbaycanda laparoskopik urologiyanın tətbiqinin əsasını
                        qoyanlardan biri olmuşdur. Mərkəzi Neftçilər Xəstəxanasında həkim-uroloq kimi işə başlamış,
                        2010-cu ildən etibarən isə xəstəxananın uroloji təcrübəsinə uroonkoloji, rekonstruktiv,
                        androloji əməliyyatlar daxil etməyə nail olmuşdur. 2010-cu ildə Azərbaycanda “Gənc Uroloqların
                        Beynəlxalq Assosiasiyası”nın (International Young Urologists Association) rəsmi nümayəndəsi
                        olmuşdur. <br/> <br/>

                        2011-ci ildə Azərbaycanda ilk dəfə böyrəyin laparoskopik-uroloji yolla xaric edilməsi
                        əməliyyatını aparmışdır. 2011-ci ildə Cənubi Koreyanın Yonsei Universitetində robotik uroloji
                        cərrahiyyə və böyrək transplantasiyası üzrə uzunmüddətli təcrübə keçmişdir. 2012-ci ildə
                        Endouroloqların 30-cu Beynəlxalq Konqresində Azərbaycanın laparoskopik urologiya üzrə ilk
                        seriyasını təqdim etmişdir. Həmin ildə Fransada (Strasburq Universiteti – IRCAD) eksperimental
                        laparoskopik cərrahiyyənin tətbiqi kurslarını uğurla bitirmişdir. Eləcə də, Ege Universitetində
                        tamamladığı dissertasiya işi Azərbaycan Respublikasının Prezidenti yanında Ali Attestasiya
                        Komissiyası tərəfindən nostrifikasiya edilərək “tibb üzrə fəlsəfə doktoru” elmi dərəcəsini
                        almışdır. Daha sonra 2014-cü ildə Türkiyə Cümhuriyyətində mikrocərrahiyyə kurslarını uğurla başa
                        vurmuşdur. 2014-cü ildə paralel şəkildə Respublika Diaqnostika Mərkəzində də uroloji fəaliyyət
                        göstərmiş və həmin xəstəxananın rəsmi konsultantı olmuşdur. 2015-ci ildə Amerika Uroloqlar
                        Assosiasiyasının (American Urological Association) araşdırmaçı üzvü olmuşdur. 2017-ci ildə
                        Respublika Diaqnostika Mərkəzinin “Böyrək xəstəlikləri və transplantologiya” şöbəsinin əsasını
                        qoyub və şöbənin rəhbəri olmuş, həmin dövrdən həm dövlət xətti ilə, həm də ödənişli əsaslarla
                        böyrəkköçürmə əməliyyatlarının icrasına başlamışdır. 2018-ci ildə Asiyanın ən böyük böyrək
                        transplantasiyası mərkəzi olan Yonsei Universitetində böyrək köçürülməsi üzrə təkmilləşmə
                        proqramını keçmişdir. 2019-cu ildə onun rəhbərliyi ilə “Böyrək xəstəlikləri və
                        transplantologiya” şöbəsi beynəlxalq keyfiyyət sertifikatı olan ABŞ-nin JCI sertifikatını
                        almışdır. 2019–2020-ci illərdə Mərkəzi Neftçilər Xəstəxanasının “Urologiya”şöbəsinə rəhbərlik
                        etmişdir. 2019-cu ildə onun təklifi ilə “Böyrək Transplantasiyası üzrə Mütəxəssislər
                        Assosiasiyası” yaradılmış, Azərbaycan Respublikası Ədliyyə Nazirliyində dövlət qeydiyyatından
                        keçmişdir. O, bu təşkilatın İdarə Heyətinin sədri seçilmişdir. 2019-cu ildə Azərbaycan
                        Respublikası Səhiyyə Nazirliyinin böyrək transplantasiyası üzrə baş mütəxəssisi təyin
                        olunmuşdur. 2021-ci ildən etibarən Səhiyyə Nazirliyinin Orqan Transplantasiyası üzrə
                        mütəxəssis-ekspertidir. 2018-ci ildə A. Qarayev adına Fiziologiya İnstitutunda
                        “İmmunofiziologiya və eksperimental transplantologiya” laboratoriyası yaradılmış və Azərbaycan
                        Milli Elmlər Akademiyasının prezidiumununun qərarı ilə Rəşad Şolan bu laboratoriyanın müdiri
                        təyin edilmişdir. <br/> <br/>

                        2023-cü ilin fevral ayından etibarən Respublika Diaqnostika Mərkəzindən öz istəyi ilə ayrılmış,
                        elə həmin vaxtdan Dövlət Təhlükəsizliyi Xidmətinin, Hərbi-Tibb Baş İdarəsinin Hərbi Hospitalında
                        onun təşəbbüsü ilə “Böyrək Xəstəlikləri və Orqan Transplantasiyası” şöbəsi yaradılmış və qısa
                        zamanda t.e.d. Rəşad Şolan tərəfindən bu tibb ocağında böyrək transplantasiyası əməliyyatlarına
                        start verilmişdir. Eyni zamanda Rəşad Şolan tərəfindən hospitalın təcrübəsinə texniki cəhətdən
                        mürəkkəb, rekonstruktiv, uroonkoloji, pediatrik uroloji əməliyyatlar daxil etmişdir. <br/><br/>

                        20 oktyabr 2023-cü ildə Dövlət Təhlükəsizliyi Xidmətinin Hərbi-Tibb Baş İdarəsində yeni
                        yaradılmış Elmi-Təcrübə Mərkəzinə rəis təyin edilmişdir. <br/><br/>

                        Rəşad Şolan 100-dan artıq elmi işin müəllifidir. Azərbaycanda və regionda interstisial sistitin
                        diaqnostikası, patogenezi və patofiziologiyası ilə bağlı doktorluq dissertasiyası müdafiə edən
                        ilk mütəxəssisdir. Onun interstisial sistit barədə eksperimental modelləri ESSIC 2019 və SUFU
                        2020 kimi nüfuzlu konqreslərdə qəbul olunmuşdur. <br/><br/>

                        Rəşad Şolan 1 aprel 2022-ci il tarixində “nterstisial sistitin/ağrılı sidik kisəsi sindromunun
                        modelləşdirilməsi, etiopatogenezində multifaktorial amillərin araşdırılması və diaqnstik
                        biomarkerlərin rolunun öyrənilməsi” mövzusunda doktorluq dissertasiyasını müdafiə etmişdir.
                        Azərbaycan Respublikasının Prezidenti yanında Ali Attestasiya Komissiyasının 7 oktyabr 2022- ci
                        il tarixli qərarı ilə Rəşad Şolana “tibb elmləri doktoru” (iki ixtisas üzrə: urologiya və
                        patoloji fiziologiya) elmi dərəcəsi verilmişdir. <br/><br/>

                        Rəşad Şolana 31 yanvar 2023-cü ildə Namanqan Dövlət Universitetinin (Özbəkistan Respublikası)
                        Böyük Elmi Şurasının 6 saylı qərarı ilə “Fəxri Professo” elmi adı verilmişdir. <br/><br/>

                        Eyni ildə Rəşad Şolana digər universitetin — Mərkəzi Asiya Tibb Universitetinin (Özbəkistan
                        Respublikası) Böyük Elmi Şurasının 8 iyun 2023-cü il tarixli, 8 saylı qərarı ilə”Fəxri
                        Professor” elmi adı verilmişdir.
                    </p>

                </div>


            </div>
        </>
    )
}

export default About