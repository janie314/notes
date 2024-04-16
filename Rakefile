# frozen_string_literal: true

require "peppermint/rake/ruby"
require "securerandom"

desc "run the dev environment"
task :dev do
  Process.spawn("bun run dev")
  Process.spawn("caddy run")
  Process.spawn("corolla", "-d", File.join("tmp", SecureRandom.uuid), "-r", "/api",
    "-p", "50001")
end
