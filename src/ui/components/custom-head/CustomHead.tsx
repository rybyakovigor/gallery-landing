import Head from 'next/head';

const CustomHead = (): React.ReactNode => {
  return (
    <Head>
      {/* TODO: Seo */}
      <title>Юлия Рыбьякова Арт</title>
      <meta
        name="description"
        content="Откройте для себя эксклюзивную коллекцию картин художника Юлии Рыбьяковой. Погрузитесь в мир искусства с картинами, доступными для просмотра и покупки."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
  );
};

export default CustomHead;
