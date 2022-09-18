
## Installation

Clone the CodeLabs Git repository:

```bash
  git clone https://git-teaching.cs.bham.ac.uk/mod-msc-proj-2021/grm198
```

Install the application's dependencies:

```bash
  cd codelabs
  docker compose build
```

Install the following Docker images:

```bash
  docker pull node:latest
  docker pull python:latest
  docker pull ruby:latest
```

## Usage


Run the application using Docker:

```bash
  docker compose up application-server
```

Visit the CodeLabs landing page at localhost:5000