# Affine Client

affine-client is a client for [AFFINE](https://github.com/toeverything/AFFiNE) based on [Tauri](https://tauri.app/)

## How to build

```shell
sh scripts/build.sh
```

Navigate to `affine-client/tauri/target/release/bundle/dmg` for target file

> It may fail in `Running bundle_dmg.sh`, just retry

## Screenshot

![home](./screenshots/home.png)

## Limitations

This client is only a wrapper without any native api intergration for now.

## TODO

- [ ] add build pipeline
- [ ] speed up build
