import './registration.css';
import RightIcon from '../../assets/registright.svg';
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

import { useRegisterPostMessageMutation, useGetRegisterContactSingleQuery } from '../../store/Api/contact';

function Registration() {
    const [registerPost] = useRegisterPostMessageMutation();

    // API'den `services` verisini çekiyoruz
    const { data: servicesData, isLoading, isError } = useGetRegisterContactSingleQuery();

    const formik = useFormik({
        initialValues: {
            fullname: '',
            number: '',
            service_id: '' // Seçilen hizmet buraya kaydedilecek
        },
        onSubmit: async (values) => {
            const response = await registerPost(values);
            if (response.data) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Mesajınız göndərildi. Biz ən qısa zamanda sizinlə əlaqə saxlayacağıq..",
                    showConfirmButton: false,
                    timer: 2500
                });
                formik.resetForm();
            } else {
                const response = await registerPost(values);
                console.log(response);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Mesajınız göndərildi. Biz ən qısa zamanda sizinlə əlaqə saxlayacağıq..",
                    showConfirmButton: false,
                    timer: 2500

                });
                formik.resetForm();
                // Swal.fire({
                //     icon: "error",
                //     title: "Xəta baş verdi",
                //     text: "Something went wrong!",
                // });
            }
        }
    });

    // API'den gelen `services` verisini düzleştiriyoruz
    // const flattenedServices = servicesData?.flat() || [];

    return (
        <div style={{ marginTop: '80px' }}>
            <div className='register'>
                <div id='register'>

                    <div className='registerdiv'>
                        <h1 className='registerTitle'>Müraciət et</h1>
                        <p className='registerText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis massa nisl, porta ac erat quis, semper sollicitudin mi
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Duis massa nisl, porta ac erat
                            quis, semper sollicitudin mi.
                        </p>
                    </div>

                    <form className='registerForm' onSubmit={formik.handleSubmit}>
                        <div className="Register-form-group">
                            <input
                                type="text"
                                name="fullname"
                                id="registername"
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                className='inputtext'
                                placeholder="Ad, Soyad"
                            />
                        </div>

                        <div className="Register-form-group">
                            <InputMask
                                mask="+994 99 999 99 99"
                                type="text"
                                name="number"
                                id="registertext"
                                onChange={formik.handleChange}
                                value={formik.values.number}
                                className='inputtext'
                                placeholder="Əlaqə nömrəniz"
                            />
                        </div>
                        <div className="custom-select-wrapper">
                            <select
                                id="message"
                                name="telim"
                                onChange={formik.handleChange}
                                value={formik.values.telim} // Backend'e gönderilecek ID burada saklanır
                                className="custom-select inputtext"
                            >
                                <option value="">
                                    Təlimi seç
                                </option>
                                {isLoading && <option>Yüklənir...</option>}
                                {isError && <option>Xəta baş verdi...</option>}
                                {!isLoading && !isError &&
                                    servicesData?.services?.flat().filter((service, index, self) =>
                                        self.findIndex(s => s.service_id === service.service_id) === index // Aynı ID'ye sahip öğeleri filtreliyoruz
                                    ).map((service) => (
                                        <option key={service.service_id} value={service.service_id}>
                                            {service.title} {/* Ekranda title gösteriliyor */}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type="submit" className='RegisterBtn'>
                            Göndər
                            <img src={RightIcon} alt="right" style={{ marginLeft: '20px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
