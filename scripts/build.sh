yarn
git submodule update --remote
cd ./affine
pnpm i
pnpm build:local
cd ../tauri
cargo install --path .
cd ..
yarn run build:client
