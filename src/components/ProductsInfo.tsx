function ProductsInfo({
  setDeleteProductInfo,
}: {
  setDeleteProductInfo: (bool: boolean) => void;
}) {
  return (
    <div className="info-product">
      <h1 className="text-4xl font-bold">Информация о продукте</h1>
      <hr className="my-4" />
      <p className="text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        voluptatem iure aut ipsa harum ex rem dolor numquam consectetur delectus
        modi, quidem enim est nihil neque magnam accusamus nulla et.
      </p>
      <button
        onClick={() => setDeleteProductInfo(false)}
        className="px-6 border border-black mt-6"
      >
        ЗАКРЫТЬ
      </button>
    </div>
  );
}

export default ProductsInfo;
