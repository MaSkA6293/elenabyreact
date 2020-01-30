import React, { Component } from 'react'; import './header.css';
import ok from '../Header/img/ok.png';
import vk from '../Header/img/vk.png';
import inst from '../Header/img/inst.png';
import elena from '../Header/img/elena.png';
import map from '../Header/img/map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const phone = <FontAwesomeIcon icon={faPhone} />
const clock = <FontAwesomeIcon icon={faClock} />
class Header extends Component {
    render() {
        return (
            <div>
                <div class="Golova">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="menu col-12 col-md-8 col-lg-9 " >
                                <a href="Price.php"> Цены</a> |
                 <a href="otzyvy.php"> Отзывы</a> |
                 <a href="https://www.instagram.com/elenavitikh/" target="_blank">Мы в Инстаграмм</a>
                            </div>

                            <div class="imagessylki col-12 col-md-4  col-lg-3  ">
                                <a href="https://ok.ru" target="_blank"> <img src={ok} alt="Одноклассники" /></a>
                                <a href="https://vk.com/" target="_blank"> <img src={vk} alt="В контакте" /></a>
                                <a href="https://www.instagram.com/" target="_blank"> <img src={inst} alt="Инстаграмм" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix" />
                </div>
                <div class="clearfix" />

                <div class="container-fluid">
                    <div class="row">
                        <div class="Block_1 col-12 col-md-6 col-lg-4">
                            <a href="index.php" > <img src={elena} alt='' class="img-fluid" /> </a>
                        </div>
                        <div class="Block_2 col-12 col-md-6 col-lg-4">
                            <i class="fa fa-phone" aria-hidden="true">{phone}</i>+7 (952) 126 15 27<br />
                            <i class="fa fa-phone" aria-hidden="true">{phone}</i>+7 (920) 631 31 41<br />
                            <i class="fa fa-clock-o" aria-hidden="true"></i>{clock}ПН-ВС 09:00-18:00
                        </div>
                        <div class="Block_3 col-12 col-md-12 col-lg-4 col-lg-4">
                            <img src={map} alt='' />Рыбное,<br /> Крымская 13<br />
                            <button id="zapisatsya" type="button" class="btn btn-success">Записаться</button>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

        )
    }
}

export default Header;