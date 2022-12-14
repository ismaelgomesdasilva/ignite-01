import styles from "./post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/ismaelgomesdasilva.png"
					/>
					<div className={styles.authorInfo}>
						<strong>Ismael Gomes</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time title="19 de dezembro as 12:18" dateTime="2022-12-19 12:17:00">
					Publicado hรก 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa ๐</p>

				<p>
					Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐
				</p>

				<p>
					<a href="#">๐{' '} jane.design/doctorcare</a>
				</p>

				<p>
					<a href="#">#novoprojeto</a>{' '}
					<a>#nlw </a>{' '}
					<a>#rocketseat/</a>{' '}
				</p>
			</div>
		</article>
	);
}
