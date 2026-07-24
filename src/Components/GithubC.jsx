import { GitHubCalendar } from "react-github-calendar";

function GithubC() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-5xl font-bold mb-10">
        Days I <span>Code</span>
      </h1>

      <GitHubCalendar
        username="rahul-t0mar"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          light: [
            "#f3e8ff", // 0 contributions
            "#e9d5ff", // low
            "#c084fc", // medium
            "#a855f7", // high
            "#7e22ce", // highest
          ],
          dark: [
            "#2e1065",
            "#7e22ce",
            "#a855f7",
            "#c084fc",
            "#f3e8ff",
          ],
        }}
      />
    </div>
  );
}

export default GithubC;