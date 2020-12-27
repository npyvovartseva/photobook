import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/elements/Header';
import MainMenu from './components/containers/MainMenu';
import MonthTitle from './components/containers/MonthTitle';
import Slide1x1 from './components/containers/Slide1x1';
import Slide3x1 from './components/containers/Slide3x1';
import Slider from './components/containers/Slider';
import './App.css';


class App extends Component {

  state = {
    transform: 0
  }

  tags = [
    { id: 0, name: "1 месяц" },
    { id: 1, name: "2 месяц" },
    { id: 2, name: "3 месяц" },
    { id: 3, name: "4 месяц" },
    { id: 4, name: "5 месяц" },
    { id: 5, name: "6 месяц" },
    { id: 6, name: "7 месяц" },
    { id: 7, name: "8 месяц" },
    { id: 8, name: "9 месяц" },
    { id: 9, name: "10 месяц" },
    { id: 10, name: "11 месяц" },
    { id: 11, name: "12 месяц" },
    { id: 13, name: "Я еще не родился" },
    { id: 14, name: "Утка" },
    { id: 15, name: "Город спит" },
    { id: 16, name: "С Новым Годом" },
    { id: 17, name: "Мой папа - самый лучший" },
    { id: 18, name: "Поговорим?)" },
    { id: 19, name: "Моя мама" },
    { id: 20, name: "Бруталити" },
    { id: 21, name: "Пикник" },
    { id: 22, name: "33 Коровы" },
  ];
  titles = [
    {
      id: '-1', image: 'itsaboy.gif', name: 'Я скоро...', description: [{
        title: 'Морковка', description: `От лица Эли:
    Мам, все ок. Я расту. 
    Не тыкай в меня этой холодной штукой! В себя потыкай. А я спатки хочу… (УЗИ)
    А это что? Сказка? Ерунда какая. А дальше что было? Ты, читай, читай… Эй! Хочу сказку!!! И папу. Он теплый.
    Ложись на левый бок, мам. Серьезно. (Ножкой по ребрам)
    И утку хочу. Не знаю что это, но прикольно.
    Мам, смотри как я умею: я морская звезда!
    Хммм. Что-то как-то тесно… Мам, а давай мы вот это и вот это чуть сдвинем?
    Три часа ночи? Давайте общаться!
    Да, я крупный и красивый ребенок. И совсем я не толстый. Дамочка, на себя посмотрите! 
    Я расту. Мне надо. Буду как папа, вот. Только как-то совсем тесно...Ребра, не трогать? Ну ладно. Я потерплю. 
    А ты читай сказку. Или не. Лучше пусть папа нам почитает. А ты мам ложись. Не-а. На левый бочок. 
    Еще чуть-чуть, мам. Мы скоро встретимся.
    `}]
    },
    {
      id: 0, image: '0mduck.jpeg', name: 'Уааааа!', description: [{
        title: 'Крокодил', description:
          `21 мая, в городе Тель Авиве, родился замечательный мальчик, наш сын - Элидан. Вес 3.800, рост 52 см.
    Добро пожаловать, Эли. Мы рады тебе.
    Первые недели жизни, ты потешно крокодилил. 
    Поочередно приоткрывая то один, то другой глаз и широко раскрыв рот, быстро-быстро вращал головой - выцеливал еду. 
    Полное содействие со стороны еды - тобой гордо игнорировалось. Спать в кроватке ты отказывался, 
    чем-то тебя смущало близкое расположение стены. Впрочем, к стенам, ты оставался не равнодушным, еще не один месяц. 
    Спать ты соглашался только на маме. Тем более на маме можно было также есть. Ползать. И бузить.
    Можно было кряхтя доползти до уха и орать туда. Или забраться на лицо и начать сосать нос. 
    Папа гордо носил оставленный тобой на груди засос, полученный пока мама мылась в душе.`
      }]
    },
    {
      id: 1, image: '1mduck.jpeg', name: '1 месяц', description: [{
        title: 'Кабачок', description: `
    Ты улыбнулся! Мама начала снова пить кофе. Папа купил самокат. Жизнь налаживалась. 
    Крокодилом мы тебя больше не называли, все больше птичкой (преимущественно голубем) или котенком. 
    В зависимости от того пачкал ты футболки или гадил в тапки. 
    Папа даже гордо звал тебя Меркава, за суровую ударную мощь и шикарное покрытие по площадям. 
    Драться со стенами ты перестал, ну почти. Ты им начал улыбаться. 
    Малыш, что ты там видел, а?
    `}]
    },
    {
      id: 2, image: '2mduck.jpeg', name: '2 месяца', description: [{
        title: 'Хомячок', description: `
    Мы выяснили что за синяки у тебя на попе и ножках. "Монгольские подковы". 
    Это в тебе непонятным образом восток взыграл. Сказали к 3-5 годам пройдет. Теперь ты Элидан-Чингизхан! 
    Маленький наш диктатор-завоеватель-обжорка. Ты кушал каждый час Эли, каждый час! 
    Мы гуляли по парку от лавочки к лавочке, от еды до еды. А еще ты отжал у папы футболки, а я перечитала тебе добрую сотню книг.  
    Плакал ты мало, больше любил орать, ворчать и возмущаться. 
    А еще танцевать. Только Френк Синатра и объятия мамы и папы, могли успокоить разошедшегося завоевателя. `}]
    },
    {
      id: 3, image: '3mduck.jpeg', name: '3 месяца', description: [{
        title: 'Элидан - Чингисхан', description: `
    Носики. Мы любим играть в носики. И засовывать все в рот. Почти два кулака и футболка… 
    Ты теперь Хомячок. Хомячок - на бочок. К танцам, добавилась страсть к деревьям. 
    Теперь мы проводим по пол дня на улице. И поем. Ты в ванночке. Я везде где придется. 
    У тебя обнаружилась нездоровая склонность к моему пению. Наш хит этого месяца: "33 коровы".  
    А еще тебя неизменно смешили слова на "Ле". Видимо какое-то малышовое ругательство. 
`}]
    },
    {
      id: 4, image: '4mduck.jpeg', name: '4 месяца', description: [{
        title: 'Потому что могу!', description: `
    Носики сменились на "ку-ку". Страсть к танцам и песням осталась.  
    Ты перевернулся со спинки на животик. А я впервые в жизни могу отжаться от пола. 
    Твой вес приблизился к 7кг. Большой, красивый, болтливый, смешливый и очень любимый ребенок. 
    Мы от тебя в восторге, малыш!`}]
    },
    { id: 5, image: '5mduck.jpeg', name: '5 месяцев', description: [{ title: 'Кто молодец?)', description: `
    Эли, я столько не пела, за все свою жизнь. Давай лучше сказку, а? 
    Или ладушки? Конечно, ты молодец. Спору нет! А на спинку перевернешься? 
    Что значит: “Переверните!!!”. Четыре утра Эли!!! Нет, это конечно тоже режим… 
    Леша, сегодня твоя очередь развлекать ребенка!` }] },
    {
      id: 6, image: '6mduck.jpeg', name: '6 месяцев', description: [{
        title: 'Я молодец!', description: `
    Да, Эли, это фонари. Они зажгутся когда сядет солнышко. 
    А это полетели птички. Нет, цветочки нюхают, а не едят. 
    Даже когда я не вижу, все равно не едят. И кабель от телефона. 
    Ладно, вот тебе бутылка - грызи. Ого. Может кашку? Что значит тьфу. Вкусная ведь кашка.  
    Не..Телефон не дам. Не дам, я сказала. Уговорил, если доползешь - бери. 
    Эй, перекатами - не честно! Наше любимое вертлявое сокровище:)`}]
    },
    { id: 7, image: '7mduck.jpeg', name: '7 месяцев', description: [{ title: 'Бубух', description: '' }] },
    { id: 8, image: 'duck.jpeg', name: '8 месяцев', description: [{ title: '', description: '' }] },
    { id: 9, image: 'duck.jpeg', name: '9 месяцев', description: [{ title: '', description: '' }] },
    { id: 10, image: 'duck.jpeg', name: '10 месяцев', description: [{ title: '', description: '' }] },
    { id: 11, image: 'duck.jpeg', name: '11 месяцев', description: [{ title: '', description: '' }] },
    { id: 12, image: 'duck.jpeg', name: '12 месяцев', description: [{ title: '', description: '' }] },
    { id: 13, image: 'duck.jpeg', name: '...Другое', description: [{ title: '', description: '' }] }
  ];
  gallery = {
    '-1': [
      <Slide1x1 key='0' images={['m/20191128_212058~2.jpg', 'm/WhatsApp Image 2020-08-31 at 20.59.09 (1).jpeg', 'm/WhatsApp Image 2020-08-31 at 20.59.09.jpeg']} />,
      <Slide1x1 key='1' images={['m/WhatsApp Image 2019-11-06 at 14.32.48.jpeg']} />,
      <Slide3x1 key='2' images={['m/WhatsApp Image 2020-01-14 at 12.25.44.jpeg', 'm/WhatsApp Image 2020-01-14 at 12.25.57.jpeg', 'm/WhatsApp Image 2020-01-14 at 12.26.19.jpeg']} />
    ],
    0: [
      <Slide1x1 key='0' images={['m0/WhatsApp Image 2020-08-31 at 20.59.09.jpg', 'm0/VID-20200831-WA0061[2].mp4', 'm0/WhatsApp Image 2020-08-31 at 20.59.09 (2).jpg']} />,
      <Slide3x1 key='1' images={['m0/20200522_183113.jpg', 'm0/20200522_183118.jpg', 'm0/20200522_183142.jpg']} />,
      <Slide1x1 key='2' images={['m0/20200522_222932.jpg']} />,
      <Slide3x1 key='3' images={['m0/20200526_200450.jpg', 'm0/20200527_125622.mp4', 'm0/20200603_182157_1.jpg']} />,
      <Slide3x1 key='5' images={['m0/20200604_145828~2.jpg', 'm0/20200604_171456_2.jpg', 'm0/20200612_082156_2.jpg']} />,
      <Slide1x1 key='4' images={['m0/20200605_162250.jpg']} />,
      <Slide3x1 key='6' images={['m0/20200605_101455.jpg', 'm0/20200605_101458.mp4', 'm0/20200605_162321.jpg']} />,
      <Slide1x1 key='7' images={['m0/20200608_190736~2.jpg']} />,
      <Slide3x1 key='8' images={['m0/20200608_175328.jpg', 'm0/WhatsApp Video 2020-06-08 at 16.30.36.mp4', 'm0/20200617_104022.jpg']} />,
      <Slide1x1 key='9' images={['', 'm0/WhatsApp Video 2020-08-31 at 20.58.37.mp4', '']} />,
      <Slide1x1 key='10' images={['m0/20200602_140521.mp4']} />,

    ],
    1: [
      <Slide3x1 key='1' images={['m1/20200628_194815.jpg', 'm1/20200701_133512.jpg', 'm1/20200628_194832.jpg']} />,
      <Slide3x1 key='2' images={['m1/20200704_105949.jpg', 'm1/20200704_105621.mp4', 'm1/20200704_105939.jpg']} />,
      <Slide3x1 key='3' images={['m1/20200623_235039.jpg', 'm1/20200701_190451.jpg', 'm1/20200708_094400.jpg']} />,
      <Slide3x1 key='4' images={['m1/20200625_143329.jpg', 'm1/20200706_191504.mp4', 'm1/20200625_143411.jpg']} />,
      <Slide1x1 key='5' images={['m1/20200717_134644.jpg']} />,
      <Slide1x1 key='6' images={['m1/20200717_134653.jpg']} />,
      <Slide1x1 key='7' images={['', 'm1/20200720_131327.mp4', '']} />,
    ],
    2: [
      <Slide1x1 key='1' images={['m2/20200729_122651~2.jpg']} />,
      <Slide1x1 key='2' images={['m2/20200728_153420.jpg']} />,
      <Slide1x1 key='3' images={['m2/20200809_175109.jpg']} />,
      <Slide1x1 key='4' images={['m2/20200809_175112.jpg']} />,
      <Slide1x1 key='5' images={['m2/20200809_175108.jpg']} />,
      <Slide3x1 key='6' images={['m2/20200730_140335.mp4', 'm2/20200724_073220.mp4', 'm2/VID-20200819-WA0002[1].mp4']} />,
      <Slide1x1 key='7' images={['m2/2020-08-31_3.jpg']} />,
      <Slide1x1 key='8' images={['m2/WhatsApp Video 2020-08-31 at 20.46.06.mp4']} />,
      <Slide1x1 key='9' images={['m2/WhatsApp Image 2020-08-31 at 20.45.52.jpg']} />,
      <Slide1x1 key='10' images={['m2/WhatsApp Image 2020-08-31 at 20.45.52 (1).jpg']} />,
      <Slide3x1 key='11' images={['', 'm2/20200816_204933.mp4', '']} />,
    ],
    3: [
      <Slide1x1 key='1' images={['m3/20200913_164804~2.jpg']} />,
      <Slide3x1 key='2' images={['m3/20200811_084942.jpg', 'm3/20200825_100004.jpg', 'm3/20200826_095753.jpg']} />,
      <Slide1x1 key='3' images={['m3/20200829_095531~2.jpg']} />,
      <Slide3x1 key='4' images={['m3/20200831_174948~2.jpg', 'm3/20200831_174925.jpg', 'm3/20200831_174922.jpg']} />,
      <Slide3x1 key='5' images={['m3/20200907_171515.jpg', 'm3/20200907_171521.mp4', 'm3/20200911_125512.jpg']} />,
      <Slide1x1 key='6' images={['m3/20200912_151957.jpg']} />,
      <Slide3x1 key='7' images={['m3/20200911_190243.jpg', 'm3/20200911_190253.mp4', 'm3/20200911_190247.jpg']} />,
      <Slide3x1 key='8' images={['m3/20200913_150618.jpg', 'm3/20200913_150604.mp4', 'm3/20200913_150545.jpg']} />,
      <Slide1x1 key='9' images={['m3/WhatsApp Image 2020-09-11 at 17.10.57 (4).jpg']} />,
      <Slide3x1 key='10' images={['m3/WhatsApp Image 2020-09-11 at 17.10.57 (3).jpg', 'm3/WhatsApp Image 2020-09-11 at 17.10.57 (1).jpg', 'm3/WhatsApp Image 2020-09-11 at 17.10.57 (2).jpg']} />,
      <Slide1x1 key='11' images={['m3/WhatsApp Image 2020-09-11 at 17.10.57.jpg']} />
    ],
    4: [
      <Slide1x1 key='1' images={['m4/20200922_142339.jpg']} />,
      <Slide3x1 key='2' images={['m4/20201018_135701.jpg', 'm4/20201009_115606.jpg', 'm4/20201018_135656.jpg']} />,
      <Slide3x1 key='3' images={['m4/20201013_174131~2.jpg', 'm4/20201009_105735.mp4', 'm4/WhatsApp Image 2020-10-07 at 23.37.29.jpg']} />,
      <Slide1x1 key='4' images={['m4/20201017_094609.jpg']} />,
      <Slide3x1 key='5' images={['m4/20201017_092039.jpg', 'm4/20201017_092044.jpg', 'm4/20201017_092146.jpg']} />,
      <Slide1x1 key='6' images={['m4/20201017_092528.jpg']} />,
      <Slide3x1 key='7' images={['', 'm4/WhatsApp Video 2020-10-17 at 10.01.42.mp4', '']} />,
      <Slide1x1 key='8' images={['m4/WhatsApp Image 2020-09-28 at 20.23.44 (1).jpg']} />,
      <Slide1x1 key='9' images={['m4/WhatsApp Image 2020-09-28 at 20.23.44 (2).jpg']} />,
      <Slide1x1 key='10' images={['m4/WhatsApp Image 2020-09-28 at 20.23.44.jpg']} />,
      <Slide3x1 key='11' images={['m4/WhatsApp Image 2020-10-07 at 23.20.35.jpg', 'm4/WhatsApp Image 2020-10-02 at 19.59.41.jpg', 'm4/WhatsApp Image 2020-10-07 at 23.20.36 (1).jpg']} />,
      <Slide3x1 key='12' images={['', 'm4/WhatsApp Video 2020-09-22 at 08.46.14.mp4', '']} />,

    ],
    5: [
      <Slide3x1 key='1' images={['m5/20201023_105503.jpg', 'm5/20201023_132224.jpg', 'm5/20201030_101533.jpg']} />,
      <Slide3x1 key='2' images={['m5/20201114_183008.jpg', 'm5/20201114_183014.jpg', 'm5/20201114_183049.jpg']} />,
      <Slide1x1 key='3' images={['m5/20201112_053343.mp4']} />,
      <Slide3x1 key='4' images={['m5/20201025_100358.jpg', 'm5/20201025_100401.mp4', 'm5/20201025_100358.jpg']} />,
      <Slide3x1 key='5' images={['', 'm5/20201113_071811.mp4', '']} />,
      <Slide1x1 key='6' images={['m5/20201115_162321.jpg']} />,
      <Slide3x1 key='7' images={['m5/20201108_081229_Burst07~2.jpg', 'm5/20201109_101238~2.jpg', 'm5/20201117_125033.jpg']} />,
      <Slide3x1 key='8' images={['', 'm5/WhatsApp Video 2020-11-20 at 19.04.21.mp4', '']} />,
      <Slide3x1 key='9' images={['', 'm5/WhatsApp Video 2020-10-24 at 10.05.47.mp4', '']} />,

    ],
    6: [
      <Slide3x1 key='1' images={['m6/20201204_190505.jpg', 'm6/20201204_190510~2.jpg', 'm6/20201204_190512.jpg']} />,
      <Slide1x1 key='2' images={['m6/WhatsApp Video 2020-11-30 at 10.02.38.mp4']} />,
      <Slide3x1 key='3' images={['m6/20201217_160331.jpg', 'm6/WhatsApp Video 2020-12-17 at 16.04.32.mp4', 'm6/20201217_160335_Burst01.jpg']} />,
      <Slide3x1 key='4' images={['m6/20201124_175747.mp4', 'm6/20201204_181041.mp4', 'm6/WhatsApp Video 2020-12-14 at 14.25.05.mp4']} />
    ]
  };

  componentDidMount() {
    AOS.init({
      duration: 1000
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollHeight = event.srcElement.body.scrollHeight,
      itemTranslate = Math.min(0, scrollHeight / 3 - 60);

    this.setState({
      transform: itemTranslate
    });
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact>
              <MainMenu titles={this.titles} />
            </Route>
            <Route path='/month/:id' exact>
              <MonthTitle titles={this.titles} />
            </Route>
            <Route path='/month/:id/slider' >
              <Slider gallery={this.gallery} style={{ transform: `translateY(${this.state.transform}px)` }} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
