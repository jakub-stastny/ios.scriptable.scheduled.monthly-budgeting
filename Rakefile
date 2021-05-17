# Not putting it into package.json/scripts since it's very ad-hoc.
REPO_PATH = File.join(ENV['HOME'], 'ios.scriptable')
SCRIPTABLE_NAME = 'Monthly budgeting.js'

# To see the colours and icons, change them in the script settings
# and then see the preamble in Working Copy.
SCRIPTABLE_PREAMBLE = <<TEXT
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: greater-than;
TEXT

desc "Copy over & push"
task :copy do
  Dir.chdir(REPO_PATH) do
    sh "git pull -r"
  end

  sh "cp index.js '#{File.join(REPO_PATH, SCRIPTABLE_NAME)}'"
  sh "cp -R page '#{REPO_PATH}'"

  Dir.chdir(REPO_PATH) do
    sh "git add '#{SCRIPTABLE_NAME}' page"
    sh "git commit '#{SCRIPTABLE_NAME}' page -m 'Automatic commit from #{Time.now.strftime('%H:%M')}'"
    sh "git push origin master"
  end
end

desc "Build & push"
task default: [:copy]
