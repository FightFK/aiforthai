
# API | AI For Thai Hackathon



---

## 📦 Requirements

- [Docker](https://www.docker.com/)
- (Optional) [Docker Compose](https://docs.docker.com/compose/)

## Deployment

To deploy this project run
First of All : Open Your Terminal then go to your working space and clone this project.
```bash
  git clone https://github.com/FightFK/aiforthai
```
then
```bash
  cd aiforthai
```
then
```bash
  docker compose up -d
```

## 🧪 How To Test
Once the container is running:

Open your browser and go to: http://localhost:3000

This hits api1 (/), which internally sends a request to api2 (/api2)

The response from api2 will be proxied and shown in your browser.

