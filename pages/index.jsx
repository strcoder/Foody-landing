import Head from 'next/head';
import Link from 'next/link';
import { BiHeartCircle } from 'react-icons/bi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { HiOutlineTruck } from 'react-icons/hi'
import { RiShoppingCartLine } from 'react-icons/ri'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import styles from '../styles/Home.module.css';

const CategoryCard = ({ title, image }) => {
  return (
    <Link href='/'>
      <a className={`${styles.categoryCard} rubberBand`}>
        <div className={styles.categoryCardBody}>
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
};

const ProductCard = ({ image, title, tags }) => {
  return (
    <div className={styles.product}>
      <Link href='/product'>
        <a className={styles.productImage}>
          <figure>
            <img src={image} alt={title} />
          </figure>
        </a>
      </Link>

      <div className={styles.productBody}>
        <p><strong>{title}</strong></p>
        <p>Descripcion</p>
      </div>

      <div className={styles.productFooter}>
        <div className={styles.productTags}>
          {tags?.map((item) =>
            <Link key={item} href={`/product?tag=${item.toLowerCase()}`}>
              <a className={item}>{item}</a>
            </Link>
          )}
        </div>
        <button type='button' title='Agregar al carrito'>
          <RiShoppingCartLine />
        </button>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Foody +</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <header className={styles.header} id='header'>
          <Link href='/'>
            <a className={styles.logo}>Foddy+</a>
          </Link>
          <nav className={styles.nav}>
            <Link href='/'>
              <a className={styles.link}>Home</a>
            </Link>
            <Link href='/'>
              <a className={styles.link}>About</a>
            </Link>
            <Link href='/'>
              <a className={styles.link}>Services</a>
            </Link>
            <Link href='/'>
              <a className={styles.link}>Contact</a>
            </Link>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroInfo}>
            <h1>Foody+</h1>
            <h2>Try the best food of the week.</h2>
            <Link href='/'>
              <a className={styles.heroLink}>View menu</a>
            </Link>
          </div>
          {/* <figure className={styles.heroImg}>
            <img
              src='https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </figure> */}
          <div className={styles.categories}>
            {/* <h2>Categorias</h2> */}
            <CategoryCard
              title='Desayuno'
              image='https://images.pexels.com/photos/5645159/pexels-photo-5645159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <CategoryCard
              title='Comida'
              image='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <CategoryCard
              title='Cena'
              image='https://images.pexels.com/photos/5591670/pexels-photo-5591670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <CategoryCard
              title='Fast food'
              image='https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <CategoryCard
              title='Postres'
              image='https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>
        </section>

        <section className={`${styles.products} fadeIn`}>
          <span className={styles.services__subtitle}>Menu</span>
          <h2 className={styles.services__title}>Menu de la semana</h2>
          <h3 className={styles.services__title}>Desayuno</h3>
          <div className={styles.productsList}>
            <ProductCard
              title='Cereal con leche'
              tags={['Desayuno', 'Fit']}
              image='https://images.pexels.com/photos/6465971/pexels-photo-6465971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Fruta y pan'
              tags={['Desayuno', 'Healt']}
              image='https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Pancakes'
              tags={['Desayuno', 'Delicious']}
              image='https://images.pexels.com/photos/4725662/pexels-photo-4725662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Pan con huevos'
              tags={['Desayuno', 'Healt']}
              image='https://images.pexels.com/photos/5591716/pexels-photo-5591716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>

          <h3 className={styles.services__title}>Comida</h3>
          <div className={styles.productsList}>
            <ProductCard
              title='Cereal con leche'
              tags={['Desayuno', 'Fit']}
              image='https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Fruta y pan'
              tags={['Desayuno', 'Healt']}
              image='https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Pancakes'
              tags={['Desayuno', 'Delicious']}
              image='https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Pan con huevos'
              tags={['Desayuno', 'Healt']}
              image='https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>

          <h3 className={styles.services__title}>Cena</h3>
          <div className={styles.productsList}>
            <ProductCard
              title='Cereal con leche'
              tags={['Desayuno', 'Fit']}
              image='https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Fruta y pan'
              tags={['Desayuno', 'Healt']}
              image='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Pancakes'
              tags={['Desayuno', 'Delicious']}
              image='https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
            <ProductCard
              title='Pan con huevos'
              tags={['Desayuno', 'Healt']}
              image='https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </div>
        </section>

        <section className={styles.services}>
          <span className={styles.services__subtitle}>Offering</span>
          <h2 className={styles.services__title}>Our amazing services</h2>

          <div className={styles.services__container}>
            <div className={styles.services__card}>
              <span className={styles.services__card__icon}><BiHeartCircle /></span>
              <h3 className={styles.services__card__title}>Excellent food</h3>
              <p className={styles.services__card__description}>
                We offer our clients excellent quality services for many years,
                with the best and delicious food in the city.
              </p>
            </div>

            <div className={styles.services__card}>
              <span className={styles.services__card__icon}><IoFastFoodOutline /></span>
              <h3 className={styles.services__card__title}>Fast food</h3>
              <p className={styles.services__card__description}>
                We offer our clients excellent quality services for many years,
                with the best and delicious food in the city.
              </p>
            </div>

            <div className={styles.services__card}>
              <span className={styles.services__card__icon}><HiOutlineTruck /></span>
              <h3 className={styles.services__card__title}>Delivery</h3>
              <p className={styles.services__card__description}>
                We offer our clients excellent quality services for many years,
                with the best and delicious food in the city.
              </p>
            </div>
          </div>
        </section>

        {/* <section className='reviews'>
          <h2>Reviews</h2>
          <div className=''>

          </div>
        </section> */}

        <footer className={styles.footer}>
          <div className={styles.footerCol1}>
            <Link href='/'>
              <a className={styles.btnFoody}>Foody +</a>
            </Link>
            <span className=''>Restaurant</span>
            <div>
              <Link href='/'>
                <a className={styles.btnFacebook}><FaFacebookF /></a>
              </Link>
              <Link href='/'>
                <a className={styles.btnInstagram}><FaInstagram /></a>
              </Link>
              <Link href='/'>
                <a className={styles.btnTwitter}><FaTwitter /></a>
              </Link>
            </div>
          </div>

          <div className={styles.footerCol2}>
            <h3>Services</h3>
            <Link href='/'><a>Delivery</a></Link>
            <Link href='/'><a>Pricing</a></Link>
            <Link href='/'><a>Fast food</a></Link>
            <Link href='/'><a>Reserve your spot</a></Link>
          </div>

          <div className={styles.footerCol3}>
            <h3>Information</h3>
            <Link href='/'><a>About us</a></Link>
            <Link href='/'><a>Contact us</a></Link>
            <Link href='/'><a>Privacy policy</a></Link>
            <Link href='/'><a>Terms of services</a></Link>
          </div>

          <div className={styles.footerCol4}>
            <h3>Adress</h3>
            <p>Colombia</p>
            <p>Dirección #123</p>
            <p>999 - 888 - 777</p>
            <p>team@foody-plus.com</p>
          </div>
        </footer>
      </div>
    </>
  );
}
