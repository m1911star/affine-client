yarn i
git submodule update
cd ./affine
pnpm i
cd ../tauri
cargo install --path .
cd ..
yarn run build:client
