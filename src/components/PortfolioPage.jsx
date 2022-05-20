import { Card, Image } from "antd";
const { Meta } = Card;

const PortfolioPage = () => {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <>
      <Card title="Наши работы">
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
        <Card.Grid
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card.Grid>
      </Card>
    </>
  );
};

export default PortfolioPage;
