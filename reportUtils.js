// Contains methods to render Pivot table correctly in report.jsx

// Group by date and host
const dimensions = [
  { value: "date", title: "Date" },
  { value: "host", title: "Host" }
];

// Keeps track of counts for impressions, loads and display
// Also count total counts
const reduce = function(row, memo) {
  memo.impressionCount =
    row.type === "impression"
      ? (memo.impressionCount || 0) + 1
      : memo.impressionCount;

  memo.loadCount =
    row.type === "load" ? (memo.loadCount || 0) + 1 : memo.loadCount;

  memo.displayCount =
    row.type === "display" ? (memo.displayCount || 0) + 1 : memo.displayCount;
  memo.count = (memo.count || 0) + 1;

  return memo;
};

// Format the output
const calculations = [
  {
    title: "Impressions",
    value: "impressionCount",
    template: function(val) {
      return val;
    }
  },
  {
    title: "Loads",
    value: "loadCount",
    template: function(val) {
      return val;
    }
  },
  {
    title: "Displays",
    value: "displayCount",
    template: function(val) {
      return val;
    }
  },
  {
    title: "Load Rate",
    value: function(memo) {
      return (memo.loadCount / memo.count) * 100;
    },
    template: function(val) {
      return `${val.toFixed(2)}%`;
    }
  },
  {
    title: "Display Rate",
    value: function(memo) {
      return (memo.displayCount / memo.count) * 100;
    },
    template: function(val) {
      return `${val.toFixed(2)}%`;
    }
  }
];

export { calculations, dimensions, reduce };
