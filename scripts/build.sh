yarn i
git submodule update
cd ./AFFINE
pnpm i
cd ../tauri
cargo install --path .
cd ..
yarn run build:client