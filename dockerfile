FROM node:latest as builder

USER root:root

ADD . /app

RUN chown -R appuser:appuser /app

USER 1000:1000

ENV NODE_ENV "production"

RUN cd /app &&\
  npm ci --ignore-scripts &&\
  npm run build &&\
  npm prune --production
USER root:root

FROM node:latest as runner

ARG GIT_COMMIT
ARG TIMESTAMP
ENV GIT_COMMIT ${GIT_COMMIT}
ENV APP_BUILD_DATA "{\"gitSha\":\"${GIT_COMMIT}\", \"built\":\"${TIMESTAMP}\"}"

COPY --from=builder /app /app
EXPOSE 8080 8443
USER 1000:1000

WORKDIR /app

CMD ["npm", "run", "start"]
