yarn i
git submodule update
cd ./AFFINE
pnpm i
cd ../tauri
cargo install
cd ..
yarn run build:client