import { Row, Col, Badge, Image, Card } from "antd";
const WorkPage = () => {
  const style = {
    height: "200px",
    background: "grey",
    padding: "8px 0",
    margin: "10px",
  };
  return (
    <div>
      <Badge.Ribbon
        color="green"
        text="Видеонаблюдение"
        style={{ "font-size": "large" }}
      >
        <Card hoverable bodyStyle={{ backgroundColor: "#f0f8fc" }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
            alt=""
          />
        </Card>
      </Badge.Ribbon>

      <br />
      <Badge.Ribbon
        color="green"
        text="Сигнализация"
        style={{ "font-size": "large" }}
      >
        <Card hoverable bodyStyle={{ backgroundColor: "#f0f8fc" }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
            alt=""
          />
        </Card>
      </Badge.Ribbon>
      <br />
      <Badge.Ribbon
        color="green"
        text="Интернет"
        style={{ "font-size": "large" }}
      >
        <Card hoverable bodyStyle={{ backgroundColor: "#f0f8fc" }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
            alt=""
          />
        </Card>
      </Badge.Ribbon>
      <br />
      <Badge.Ribbon
        color="green"
        text="Телевидение"
        style={{ "font-size": "large" }}
      >
        <Card hoverable bodyStyle={{ backgroundColor: "#f0f8fc" }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
            alt=""
          />
        </Card>
      </Badge.Ribbon>
      <br />
      <Badge.Ribbon
        color="green"
        text="Автономное электроснабжение"
        style={{ "font-size": "large" }}
      >
        <Card hoverable bodyStyle={{ backgroundColor: "#f0f8fc" }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg"
            alt=""
          />
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default WorkPage;
