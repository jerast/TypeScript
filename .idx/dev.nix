# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    # pkgs.mongosh
    # pkgs.mongodb
    pkgs.git
    pkgs.corepack
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-rename-tag"
      "bradlc.vscode-tailwindcss"
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "rangav.vscode-thunder-client"
      "rvest.vs-code-prettier-eslint"
      "PKief.material-icon-theme"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        # npm-install = "pnpm install";
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = false;
      previews = {
        web = {
          # command = ["pnpm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"];
          # manager = "web"
        };
      };
    };
  };
}
