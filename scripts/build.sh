yarn
git submodule update --init --recursive
cd ./affine
pnpm i
pnpm build:local
cd ../tauri
cargo install --path .
cd ..
yarn run build:client